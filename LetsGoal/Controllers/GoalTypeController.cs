using System;
using System.Collections.Generic;
using System.Linq;
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
    public class GoalTypeController : ControllerBase
    { 
  
            private readonly GoalTypeRepository _goalTypeRepository;
            public GoalTypeController(ApplicationDbContext context)
            {
                _goalTypeRepository = new GoalTypeRepository(context);
            }

            [HttpGet]
            public IActionResult Get()
            {
                return Ok(_goalTypeRepository.GetAll());
            }

            [HttpGet("{id}")]
            public IActionResult Get(int id)
            {
                var goalType = _goalTypeRepository.GetById(id);
                if (goalType == null)
                {
                    return NotFound();
                }
                return Ok(goalType);
            }

            [HttpPost]
            public IActionResult Post(GoalType goalType)
            {
                _goalTypeRepository.Add(goalType);
                return CreatedAtAction("Get", new { id = goalType.Id }, goalType);
            }

            [HttpPut("{id}")]
            public IActionResult Put(int id, GoalType goalType)
            {
                if (id != goalType.Id)
                {
                    return BadRequest();
                }

                _goalTypeRepository.Update(goalType);
                return NoContent();
            }

            [HttpDelete("{id}")]
            public IActionResult Delete(int id)
            {
                _goalTypeRepository.Delete(id);
                return NoContent();
            }
    }
}


