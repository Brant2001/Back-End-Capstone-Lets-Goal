using LetsGoal.Data;
using LetsGoal.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LetsGoal.Repositories
{
    public class DifficultyRepository
    {
        private readonly ApplicationDbContext _context;

        public DifficultyRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Difficulty> GetAll()
        {
            return _context.Difficulty.OrderBy(c => c.Id).ToList();
        }

        public Difficulty GetById(int id)
        {
            return _context.Difficulty.FirstOrDefault(c => c.Id == id);
        }

        public void Add(Difficulty difficulty)
        {
            _context.Add(difficulty);
            _context.SaveChanges();
        }

        public void Update(Difficulty difficulty)
        {
            _context.Entry(difficulty).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var difficulty = GetById(id);
            _context.Difficulty.Remove(difficulty);
            _context.SaveChanges();
        }
    }
}
