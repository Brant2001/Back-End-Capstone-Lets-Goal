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
    public class DifficultyController : ControllerBase
    {
        private readonly DifficultyRepository _difficultyRepository;
        public DifficultyController(ApplicationDbContext context)
        {
            _difficultyRepository = new DifficultyRepository(context);
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_difficultyRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var difficulty = _difficultyRepository.GetById(id);
            if (difficulty == null)
            {
                return NotFound();
            }
            return Ok(difficulty);
        }

        [HttpPost]
        public IActionResult Post(Difficulty difficulty)
        {
            _difficultyRepository.Add(difficulty);
            return CreatedAtAction("Get", new { id = difficulty.Id }, difficulty);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Difficulty difficulty)
        {
            if (id != difficulty.Id)
            {
                return BadRequest();
            }

            _difficultyRepository.Update(difficulty);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _difficultyRepository.Delete(id);
            return NoContent();
        }
    }
}
