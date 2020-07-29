using LetsGoal.Data;
using LetsGoal.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LetsGoal.Repositories
{
    public class GoalTypeRepository
    {

        private readonly ApplicationDbContext _context;

        public GoalTypeRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<GoalType> GetAll()
        {
            return _context.GoalType.OrderBy(c => c.Id).ToList();
        }

        public GoalType GetById(int id)
        {
            return _context.GoalType.FirstOrDefault(c => c.Id == id);
        }
        public void Add(GoalType category)
        {
            _context.Add(category);
            _context.SaveChanges();
        }

        public void Update(GoalType category)
        {
            _context.Entry(category).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var category = GetById(id);
            _context.GoalType.Remove(category);
            _context.SaveChanges();
        }
    }
}
