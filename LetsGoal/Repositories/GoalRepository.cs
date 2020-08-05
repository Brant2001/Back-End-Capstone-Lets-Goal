using LetsGoal.Data;
using LetsGoal.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace LetsGoal.Repositories
{
    public class GoalRepository
    {
        private readonly ApplicationDbContext _context;

        public GoalRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Goal> GetAll()
        {
            return _context.Goal
                .Include(p => p.UserProfile)
                .Include(p => p.GoalType)
                .Include(p => p.Difficulty)
                .Include(p => p.actions)
                .Where(p => p.UserProfile.IsPublic == true)
                .OrderBy(p => p.GoalType.Id)
                .ToList();
        }

        public Goal GetById(int id)
        {
            return _context.Goal
                .Include(p => p.UserProfile)
                .Include(p => p.GoalType)
                .Include(p => p.Difficulty)
                .Include(p => p.actions)
                .FirstOrDefault(p => p.Id == id);
        }

        public List<Goal> GetByUserProfileId(int id)
        {
            return _context.Goal       
                .Include(p => p.UserProfile)
                .Include(p => p.GoalType)
                .Include(p => p.Difficulty)
                .Include(p => p.actions)
                .Where(p => p.UserProfileId == id)
                .OrderBy(p => p.GoalType.Id)
                .ToList();
        }

        public List<Goal> Search(string criterion, bool sortDescending)
        {
            var query = _context.Goal
                                .Include(p => p.UserProfile)
                                .Include(p => p.GoalType)
                                .Include(p => p.Difficulty)
                                .Include(p => p.actions)
                                .Where(p => p.Title.Contains(criterion) || p.Description.Contains(criterion));

            return sortDescending
                ? query.OrderByDescending(p => p.DateCreated).ToList()
                : query.OrderBy(p => p.DateCreated).ToList();
        }

        public List<Goal> SearchDate(DateTime dateTime, bool sortDescending)
        {
            var query = _context.Goal
                                .Include(p => p.UserProfile)
                                .Include(p => p.GoalType)
                                .Include(p => p.Difficulty)
                                .Include(p => p.actions)
                                .Where(p => p.DateCreated >= dateTime);

            return sortDescending
                ? query.OrderByDescending(p => p.DateCreated).ToList()
                : query.OrderBy(p => p.DateCreated).ToList();
        }

        public void Add(Goal goal)
        {
            _context.Add(goal);
            _context.SaveChanges();
        }

        public void Update(Goal goal)
        {
            _context.Entry(goal).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            // Remove related actions first
            var relatedActions = _context.Action.Where(c => c.GoalId == id);
            _context.Action.RemoveRange(relatedActions);

            var goal = GetById(id);
            _context.Goal.Remove(goal);
            _context.SaveChanges();
        }
    }
}
