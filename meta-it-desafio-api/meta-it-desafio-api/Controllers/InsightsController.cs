using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using meta_it_desafio_api.Data;
using meta_it_desafio_api.Model;

namespace meta_it_desafio_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InsightsController : ControllerBase
    {
        private readonly DataContext _context;

        public InsightsController(DataContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Busca insight.
        /// </summary>
        /// <returns>Retona todos os Insights criados.</returns>
        // GET: api/Insights
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Insight>>> GetInsight()
        {
            if (_context.Insight == null)
            {
                return NotFound();
            }

            return await _context.Insight.Include(e => e.Tags).ToListAsync();
        }

        /// <summary>
        /// Busca insight por id.
        /// </summary>
        /// <param name="id">identificador insight</param>
        /// <returns>Apenas o insight referente ao id informado</returns>
        // GET: api/Insights/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Insight>> GetInsight(int id)
        {
          if (_context.Insight == null)
          {
              return NotFound();
          }
            var insight = await _context.Insight.FindAsync(id);

            if (insight == null)
            {
                return NotFound();
            }

            return insight;
        }

        /// <summary>
        /// Edita um insight através id.
        /// </summary>
        /// <param name="id">identificador insight</param>
        // PUT: api/Insights/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInsight(int id, Insight insight)
        {
            if (id != insight.Id)
            {
                return BadRequest();
            }

            _context.Entry(insight).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InsightExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        /// <summary>
        /// Cria um insight.
        /// </summary>
        /// <returns>Retona o insight criado com o id gerado pelo banco de dados</returns>
        // POST: api/Insights
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Insight>> PostInsight(Insight insight)
        {
          if (_context.Insight == null)
          {
              return Problem("Entity set 'DataContext.Insight'  is null.");
          }
            _context.Insight.Add(insight);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInsight", new { id = insight.Id }, insight);
        }

        /// <summary>
        /// Deleta um insight.
        /// </summary>
        /// <param name="id">identificador insight</param>
        // DELETE: api/Insights/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInsight(int id)
        {
            if (_context.Insight == null)
            {
                return NotFound();
            }
            var insight = await _context.Insight.FindAsync(id);
            if (insight == null)
            {
                return NotFound();
            }

            _context.Insight.Remove(insight);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InsightExists(int id)
        {
            return (_context.Insight?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
