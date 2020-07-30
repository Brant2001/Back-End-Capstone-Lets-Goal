using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LetsGoal.Models
{
    public class Action
    {
        public int Id { get; set; }

        [Required]
        public int GoalId { get; set; }

        public Goal Goal { get; set; }

        public int DifficultyId { get; set; }

        public Difficulty Difficulty { get; set; }

        [Required]
        public string Title { get; set; }

        public string Description { get; set; }

        [Required]
        public DateTime DateCreated { get; set; }

        [Required]
        public bool IsComplete { get; set; }
    }
}
