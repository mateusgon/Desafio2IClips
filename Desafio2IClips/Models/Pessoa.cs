using Desafio2IClips.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Desafio2IClips.Models
{
    public class Pessoa
    {
        public string Nome { get; set; }
        public string Email { get; set; }
        public PessoaSituacao Situacao { get; set; }
    }
}