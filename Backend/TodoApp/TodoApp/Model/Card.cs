using System.Text.Json.Serialization;

namespace TodoApp.Model
{
    public class Card
    {
        public long Id { get; set; }
        public string ? Name { get; set; }

        public List<Todo>? Todos { get; set; } = new List<Todo>();
    }
}
