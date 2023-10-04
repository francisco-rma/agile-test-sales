using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Sales.Models
{
    [Table("brand")]
    public class Brand
    {
        [Key]
        [Column("id_brand")]
        public int idBrand { get; set; }

        [Column("brand_name")]
        public string brandName { get; set; }

        [Column("id_product")]
        public int idProduct { get; set; }
    }
}
