﻿namespace TodoApp.DTO
{
    public class TodoDto
    {
        public string? Title { get; set; }
        public string? Description { get; set; }

        public DateTime Deadline { get; set; }

        public int Priority { get; set; }

        public long CardId { get; set; }
    }
}
