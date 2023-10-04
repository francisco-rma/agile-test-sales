using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Sales.Requests;

namespace Sales.Models
{
    [Table("category")]
    public class Category
    {
        [Key]
        [Column("id_category")]
        public int idCategory { get; set; }

        [Column("category_name")]
        public string categoryName { get; set; }
    }
}
