using Microsoft.EntityFrameworkCore;
using TodoApp.Model;

namespace TodoApp.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        public DbSet<Todo> Todos { get; set; }
        public DbSet<Card> Cards { get; set; }
    }
}
