using System.Text.Json.Serialization;

namespace TodoApp.Model
{
    public class Card
    {
        public long Id { get; set; }
        public string ? Name { get; set; }
        [JsonIgnore]
        public List<Todo>? Todos { get; set; } = new List<Todo>();
    }
}
