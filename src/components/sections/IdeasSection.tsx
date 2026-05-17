import { Copy, Download } from 'lucide-react';
import { auditData } from '../../data/auditData';
import { searchData, copyToClipboard, downloadAsJSON } from '../../utils/helpers';
import './Section.css';

interface IdeasSectionProps {
  searchQuery: string;
}

export default function IdeasSection({ searchQuery }: IdeasSectionProps) {
  const filteredIdeas = searchData(searchQuery, auditData.contentIdeas);

  const handleCopy = async (text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      alert('Copied to clipboard!');
    }
  };

  const handleDownloadJSON = () => {
    downloadAsJSON(filteredIdeas, 'content-ideas.json');
  };

  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h2>Unique Content Ideas</h2>
          <p className="section-subtitle">8 differentiated content ideas to outperform competitors</p>
        </div>
        <div className="section-actions">
          <button className="btn-tertiary" onClick={handleDownloadJSON} title="Download as JSON">
            <Download size={18} />
            JSON
          </button>
        </div>
      </div>

      {filteredIdeas.length === 0 ? (
        <div className="empty-state">
          <p>No ideas found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-2">
          {filteredIdeas.map((idea) => (
            <div key={idea.id} className="card idea-card">
              <div className="idea-header">
                <h3>{idea.title}</h3>
                <span className="badge badge-outline">{idea.topic}</span>
              </div>

              <div className="idea-content">
                <div className="idea-section">
                  <h4>Hook Variations</h4>
                  <ul className="hook-list">
                    {idea.hooks.map((hook: string, idx: number) => (
                      <li key={idx}>
                        <span>"{hook}"</span>
                        <button
                          className="btn-copy-small"
                          onClick={() => handleCopy(hook)}
                          title="Copy"
                        >
                          <Copy size={14} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="idea-section">
                  <h4>Emotional Trigger</h4>
                  <p className="idea-text">{idea.emotionalTrigger}</p>
                </div>

                <div className="idea-section">
                  <h4>Suggested Structure</h4>
                  <p className="idea-text">{idea.structure}</p>
                </div>

                <div className="idea-section">
                  <h4>CTA Recommendation</h4>
                  <p className="idea-text">"{idea.cta}"</p>
                </div>

                <div className="idea-section">
                  <h4>Why This Will Work</h4>
                  <p className="idea-text">{idea.why}</p>
                </div>

                <div className="idea-section">
                  <h4>How It Differs</h4>
                  <p className="idea-text">{idea.differentiation}</p>
                </div>
              </div>

              <div className="card-footer">
                <button
                  className="btn-copy"
                  onClick={() => handleCopy(JSON.stringify(idea, null, 2))}
                  title="Copy all"
                >
                  <Copy size={16} />
                  Copy All
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="section-stats">
        <p>Showing {filteredIdeas.length} of {auditData.contentIdeas.length} ideas</p>
      </div>
    </section>
  );
}
