using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using LetsGoal.Data;
using LetsGoal.Models;
using LetsGoal.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LetsGoal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActionController : ControllerBase
    {
        private readonly ActionRepository _actionRepository;
        private readonly UserProfileRepository _userProfileRepository;


        public ActionController(ApplicationDbContext context)
        {
            _actionRepository = new ActionRepository(context);
            _userProfileRepository = new UserProfileRepository(context);
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_actionRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var action = _actionRepository.GetById(id);
            if (action == null)
            {
                return NotFound();
            }
            return Ok(action);
        }

        [HttpGet("/getbygoal/{id}")]
        public IActionResult GetByGoalId(int id)
        {
            return Ok(_actionRepository.GetByGoalId(id));
        }

        [HttpPost]
        public IActionResult AddAction(Models.Action action)
        {
            _actionRepository.Add(action);
            return CreatedAtAction("Get", new { id = action.Id }, action);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Models.Action action)
        {
            if (id != action.Id)
            {
                return BadRequest();
            }

            _actionRepository.Update(action);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var user = GetCurrentUserProfile();
            var action = _actionRepository.GetById(id);
            if (user.Id != action.Goal.UserProfileId)
            {
                return Forbid();
            }

            _actionRepository.Delete(id);
            return NoContent();
        }
        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
