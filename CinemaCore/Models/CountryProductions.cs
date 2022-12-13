﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace CinemaCore.Models;

public partial class CountryProductions
{
    public int Id { get; set; }

    [Required(ErrorMessage = "Не указана страна-производитель")]
    [Display(Name = "Страна-производитель")]
    public string? Name { get; set; }

    public virtual ICollection<Films> Films { get; } = new List<Films>();
}
