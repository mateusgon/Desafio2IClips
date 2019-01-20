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
        public string Situacao { get; set; }

        public Pessoa()
        {
        }

        public Pessoa(string nome, string email, string situacao)
        {
            Nome = nome;
            Email = email;
            Situacao = situacao;
        }
    }
}