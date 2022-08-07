using System.ComponentModel.DataAnnotations.Schema;

namespace meta_it_desafio_api.Model
{
    public class Insight
    {
        public int Id { get; set; }

        public string Text { get; set; }

        public DateTime DtCreate { get; set; }

        public DateTime DtUpdate { get; set; }

        [ForeignKey("Tag")]
        public int? TagId { get; set; }

        public Tag? Tags { get; set; }
    }
}
