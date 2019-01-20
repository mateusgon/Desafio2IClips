using Desafio2IClips.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Desafio2IClips.Classes
{
    public class PessoaDAO
    {
        private List<Pessoa> Pessoas;

        public PessoaDAO()
        {
            Pessoas = new List<Pessoa>();
            Pessoa pessoa = new Pessoa("David Koch", "david@gmail.com", "Em andamento");
            Pessoas.Add(pessoa);
            Pessoa pessoa2 = new Pessoa("Charles Koch", "koch@gmail.com", "Atrasado");
            Pessoas.Add(pessoa2);
            Pessoa pessoa3 = new Pessoa("Michael Bloomberg", "bloomberg@gmail.com", "Atrasado");
            Pessoas.Add(pessoa3);
            Pessoa pessoa4 = new Pessoa("Larry Ellison", "larry@gmail.com", "Atrasado");
            Pessoas.Add(pessoa4);
            Pessoa pessoa5 = new Pessoa("Mark Zuckerberg", "mark@gmail.com", "Atrasado");
            Pessoas.Add(pessoa5);
            Pessoa pessoa6 = new Pessoa("Jeff Bezos", "jeff@gmail.com", "Em andamento");
            Pessoas.Add(pessoa6);
            Pessoa pessoa7 = new Pessoa("Carlos Slim", "carlos@gmail.com", "Em andamento");
            Pessoas.Add(pessoa7);
            Pessoa pessoa8 = new Pessoa("Warren Buffett", "warren@gmail.com", "Atrasado");
            Pessoas.Add(pessoa8);
            Pessoa pessoa9 = new Pessoa("Amâncio Ortega", "ortega@gmail.com", "Em andamento");
            Pessoas.Add(pessoa9);
            Pessoa pessoa10 = new Pessoa("Bill Gates", "gates@gmail.com", "Em andamento");
            Pessoas.Add(pessoa10);
        }

        public IEnumerable<Pessoa> GetPessoas(string situacao, int tipoOrdenacao)
        {
            if (tipoOrdenacao == 0)
            {
                return Pessoas.Where(x => x.Situacao.Equals(situacao));
            }
            else
            {
                return Pessoas.Where(x => x.Situacao.Equals(situacao)).OrderBy(x => x.Nome);
            }
        }
    }
}