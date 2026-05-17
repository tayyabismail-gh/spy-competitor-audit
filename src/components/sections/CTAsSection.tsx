import { Copy, Download } from 'lucide-react';
import { auditData } from '../../data/auditData';
import { searchData, copyToClipboard, downloadAsJSON, downloadAsCSV } from '../../utils/helpers';
import './Section.css';

interface CTAsSectionProps {
  searchQuery: string;
}

export default function CTAsSection({ searchQuery }: CTAsSectionProps) {
  const filteredCTAs = searchData(searchQuery, auditData.ctas);

  const handleCopy = async (text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      alert('Copied to clipboard!');
    }
  };

  const handleDownloadJSON = () => {
    downloadAsJSON(filteredCTAs, 'ctas.json');
  };

  const handleDownloadCSV = () => {
    downloadAsCSV(filteredCTAs, 'ctas.csv');
  };

  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h2>Call-to-Action Patterns</h2>
          <p className="section-subtitle">Analyzed CTA strategies and their effectiveness</p>
        </div>
        <div className="section-actions">
          <button className="btn-tertiary" onClick={handleDownloadJSON} title="Download as JSON">
            <Download size={18} />
            JSON
          </button>
          <button className="btn-tertiary" onClick={handleDownloadCSV} title="Download as CSV">
            <Download size={18} />
            CSV
          </button>
        </div>
      </div>

      {filteredCTAs.length === 0 ? (
        <div className="empty-state">
          <p>No CTAs found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-2">
          {filteredCTAs.map((cta) => (
            <div key={cta.id} className="card cta-card">
              <div className="card-header">
                <span className="badge badge-secondary">{cta.type}</span>
                <span className="badge badge-success">★ {cta.effectiveness}/5</span>
              </div>

              <div className="cta-content">
                <p className="cta-wording">"{cta.wording}"</p>

                <div className="cta-details">
                  <div className="detail">
                    <span className="detail-label">Placement:</span>
                    <span className="detail-value">{cta.placement}</span>
                  </div>
                  <div className="detail">
                    <span className="detail-label">Style:</span>
                    <span className="detail-value">{cta.style}</span>
                  </div>
                  <div className="detail">
                    <span className="detail-label">Performance:</span>
                    <span className="detail-value">{cta.performance}</span>
                  </div>
                  <div className="detail">
                    <span className="detail-label">Psychology:</span>
                    <span className="detail-value">{cta.psychology}</span>
                  </div>
                </div>

                <div className="effectiveness-metrics">
                  <div className="metric-item">
                    <span>Engagement</span>
                    <div className="stars">
                      {'★'.repeat(cta.engagement)}{'☆'.repeat(5 - cta.engagement)}
                    </div>
                  </div>
                  <div className="metric-item">
                    <span>Conversion</span>
                    <div className="stars">
                      {'★'.repeat(cta.conversion)}{'☆'.repeat(5 - cta.conversion)}
                    </div>
                  </div>
                  <div className="metric-item">
                    <span>Clarity</span>
                    <div className="stars">
                      {'★'.repeat(cta.clarity)}{'☆'.repeat(5 - cta.clarity)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <button
                  className="btn-copy"
                  onClick={() => handleCopy(cta.wording)}
                  title="Copy to clipboard"
                >
                  <Copy size={16} />
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="section-stats">
        <p>Showing {filteredCTAs.length} of {auditData.ctas.length} CTAs</p>
      </div>
    </section>
  );
}
