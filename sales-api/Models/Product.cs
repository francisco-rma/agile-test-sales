using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Sales.Models
{
    [Table("product")]
    public class Product
    {
        [Key]
        [Column("id_product")]
        public int idProduct { get; set; }

        [Column("product_name")]
        public string productName { get; set; }

        [Column("id_cateogry")]
        public int idCategory { get; set; }
    }
}
