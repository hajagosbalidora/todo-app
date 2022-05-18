#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApp.Data;
using TodoApp.DTO;
using TodoApp.Model;

namespace TodoApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private readonly DataContext _context;

        public TodosController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Todos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Todo>>> GetTodos()
        {
            return await _context.Todos.ToListAsync();
        }

        // GET: api/Todos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Todo>> GetTodo(long id)
        {
            var todo = await _context.Todos.FindAsync(id);

            if (todo == null)
            {
                return NotFound();
            }

            return todo;
        }

        // PUT: api/Todos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodo(long id, TodoDto request)
        {
            if (request == null)
                return BadRequest();
            var todo = await _context.Todos.FindAsync(id);
            if (id != todo.Id)
            {
                return BadRequest();
            }
            var todoCard = todo.CardType;
            if(todoCard.Id != request.CardId)
            {
                var cards =_context.Cards.ToList();
                foreach(var card in cards)
                {
                    card.Todos.Remove(todo);
                }
                var newtodo = new Todo()
                {
                    Title = request.Title,
                    Description = request.Description,
                    Deadline = request.Deadline
                };
                _context.Entry(newtodo).Property(t => t.Title).IsModified = true;
                _context.Entry(newtodo).Property(t => t.Title).IsModified = true;
                _context.Entry(newtodo).Property(t => t.Title).IsModified = true;
                foreach (var card in cards)
                {
                    card.Todos.Add(newtodo);
                }
            }
            var newTodo = new Todo()
            {
                Title = request.Title,
                Description = request.Description,
                Deadline = request.Deadline
            };
            _context.Entry(newTodo).Property(t => t.Title).IsModified = true;
            _context.Entry(newTodo).Property(t => t.Title).IsModified = true;
            _context.Entry(newTodo).Property(t => t.Title).IsModified = true;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Todos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Todo>> PostTodo(TodoDto request)
        {
            var card = await _context.Cards.FindAsync(request.CardId);
            if(card == null)
                return NotFound();
            var newTodo = new Todo
            {
                Title = request.Title,
                Description = request.Description,
                Deadline = request.Deadline,
                Priority = request.Priority
            };
            _context.Todos.Add(newTodo);
            card.Todos.Add(newTodo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTodo", new { id = newTodo.Id }, newTodo);
        }

        // DELETE: api/Todos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodo(long id)
        {
            var todo = await _context.Todos.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.Todos.Remove(todo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TodoExists(long id)
        {
            return _context.Todos.Any(e => e.Id == id);
        }
    }
}
