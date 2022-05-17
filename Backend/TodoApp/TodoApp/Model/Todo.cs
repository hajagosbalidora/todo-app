using System.Text.Json.Serialization;

namespace TodoApp.Model
{
    public class Todo
    {
        public long Id { get; set; }
        public string ? Title { get; set; }

        public string ? Description { get; set; }

        public DateTime Deadline { get; set; }
        [JsonIgnore]
        public int ? Priority { get; set; }
        [JsonIgnore]
        public Card CardType { get; set; }
    }
}
