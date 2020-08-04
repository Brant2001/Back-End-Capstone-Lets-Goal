using LetsGoal.Data;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace LetsGoal.Repositories
{
    public class ActionRepository
    {
        private readonly ApplicationDbContext _context;

        public ActionRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Models.Action> GetAll()
        {
            return _context.Action
                .Include(a => a.Goal)
                .Include(a => a.Difficulty)
                .ToList();
        }

        public Models.Action GetById(int id)
        {
            return _context.Action
                .Include(a => a.Goal)
                .ThenInclude(g => g.actions)
                .Include(a => a.Difficulty)
                .FirstOrDefault(a => a.Id == id);
        }

        public List<Models.Action> GetByGoalId(int id)
        {
            return _context.Action
                .Include(a => a.Goal)
                .Include(a => a.Difficulty)
                .Where(a => a.GoalId == id)
                .ToList();
        }

        public void Add(Models.Action action)
        {
            _context.Add(action);
            _context.SaveChanges();
        }

        public void Update(Models.Action action)
        {
            _context.Entry(action).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {

            var action = GetById(id);
            _context.Action.Remove(action);
            _context.SaveChanges();
        }
    }
}
