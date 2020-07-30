using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using LetsGoal.Data;
using LetsGoal.Models;
using LetsGoal.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LetsGoal.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class GoalController : ControllerBase
    {
        private readonly GoalRepository _goalRepository;
        private readonly UserProfileRepository _userProfileRepository;

        public GoalController(ApplicationDbContext context)
        {
            _goalRepository = new GoalRepository(context);
            _userProfileRepository = new UserProfileRepository(context);
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_goalRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var goal = _goalRepository.GetById(id);
            if (goal == null)
            {
                return NotFound();
            }
            return Ok(goal);
        }

        [HttpGet("getbyuser/{id}")]
        public IActionResult GetByUser(int id)
        {
            return Ok(_goalRepository.GetByUserProfileId(id));
        }

        [HttpPost]
        public IActionResult Goal(Goal goal)
        {
            _goalRepository.Add(goal);
            return CreatedAtAction("Get", new { id = goal.Id }, goal);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Goal goal)
        {
            if (id != goal.Id)
            {
                return BadRequest();
            }

            _goalRepository.Update(goal);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var user = GetCurrentUserProfile();
            var goal = _goalRepository.GetById(id);
            if (user.Id != goal.UserProfileId)
            {
                return Forbid();
            }

            _goalRepository.Delete(id);
            return NoContent();
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
