using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Sales.Models
{
    [Table("sale")]
    public class Sale
    {
        [Key]
        [Column("id_sale")]
        public int idSale { get; set; }

        [Column("amount")]
        public int amount { get; set; }

        [Column("id_brand")]
        public int idBrand { get; set; }

        [Column("month")]
        public int month { get; set; }
    }
}
