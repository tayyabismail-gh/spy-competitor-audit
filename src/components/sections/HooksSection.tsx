import { Copy, Download } from 'lucide-react';
import { auditData } from '../../data/auditData';
import { searchData, copyToClipboard, downloadAsJSON, downloadAsCSV } from '../../utils/helpers';
import './Section.css';

interface HooksSectionProps {
  searchQuery: string;
}

export default function HooksSection({ searchQuery }: HooksSectionProps) {
  const filteredHooks = searchData(searchQuery, auditData.hooks);

  const handleCopy = async (text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      alert('Copied to clipboard!');
    }
  };

  const handleDownloadJSON = () => {
    downloadAsJSON(filteredHooks, 'hooks.json');
  };

  const handleDownloadCSV = () => {
    downloadAsCSV(filteredHooks, 'hooks.csv');
  };

  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h2>Hook Patterns & Analysis</h2>
          <p className="section-subtitle">Competitor's most effective opening lines and emotional triggers</p>
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

      {filteredHooks.length === 0 ? (
        <div className="empty-state">
          <p>No hooks found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-2">
          {filteredHooks.map((hook) => (
            <div key={hook.id} className="card hook-card">
              <div className="card-header">
                <span className="badge badge-secondary">{hook.category}</span>
                <span className="badge badge-success">{hook.avgScore.toFixed(1)}/10</span>
              </div>

              <div className="hook-content">
                <p className="hook-example">"{hook.example}"</p>

                <div className="metrics-grid">
                  <div className="metric">
                    <span className="metric-label">Curiosity</span>
                    <div className="metric-bar">
                      <div className="metric-fill" style={{ width: `${hook.curiosityStrength * 10}%` }}></div>
                    </div>
                    <span className="metric-value">{hook.curiosityStrength}/10</span>
                  </div>

                  <div className="metric">
                    <span className="metric-label">Scroll-Stop</span>
                    <div className="metric-bar">
                      <div className="metric-fill" style={{ width: `${hook.scrollStoppingAbility * 10}%` }}></div>
                    </div>
                    <span className="metric-value">{hook.scrollStoppingAbility}/10</span>
                  </div>

                  <div className="metric">
                    <span className="metric-label">Clarity</span>
                    <div className="metric-bar">
                      <div className="metric-fill" style={{ width: `${hook.clarity * 10}%` }}></div>
                    </div>
                    <span className="metric-value">{hook.clarity}/10</span>
                  </div>

                  <div className="metric">
                    <span className="metric-label">Uniqueness</span>
                    <div className="metric-bar">
                      <div className="metric-fill" style={{ width: `${hook.uniqueness * 10}%` }}></div>
                    </div>
                    <span className="metric-value">{hook.uniqueness}/10</span>
                  </div>
                </div>

                <div className="hook-details">
                  <div className="detail">
                    <span className="detail-label">Emotional Trigger:</span>
                    <span className="detail-value">{hook.emotionalTrigger}</span>
                  </div>
                  <div className="detail">
                    <span className="detail-label">Classification:</span>
                    <span className="detail-value">{hook.classification}</span>
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <button
                  className="btn-copy"
                  onClick={() => handleCopy(hook.example)}
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
        <p>Showing {filteredHooks.length} of {auditData.hooks.length} hooks</p>
      </div>
    </section>
  );
}
