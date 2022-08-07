using meta_it_desafio_api.Model;
using Microsoft.EntityFrameworkCore;

namespace meta_it_desafio_api.Data
{
    public class DataContext : DbContext
    {
        public DataContext (DbContextOptions<DataContext> options) 
            : base(options) { }

        public DbSet<Insight> Insight { get; set; } = default;

        public DbSet<Tag>? Tag { get; set; } = default;
    }
}
