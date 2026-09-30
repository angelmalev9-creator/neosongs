'use client';

import { useMemo, useState } from 'react';

const styleTags = [
  'Dance Pop',
  'Afro House',
  'Cinematic',
  'Summer Hit',
  'Club',
  'Emotional',
  'Dark Pop',
  'Latin',
];

const demoTracks = [
  { title: 'Midnight Motion', meta: 'Dance Pop • Female Vocal • 02:34', status: 'Ready' },
  { title: 'City Lights', meta: 'Synthwave • Male Vocal • 03:01', status: 'Draft' },
  { title: 'Ocean Fire', meta: 'Afro House • Instrumental • 02:48', status: 'Ready' },
];

export default function Home() {
  const [busy, setBusy] = useState(false);
  const [activeView, setActiveView] = useState('create');
  const [projectName, setProjectName] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [style, setStyle] = useState('');

  const promptLength = useMemo(() => style.trim().length, [style]);

  const generate = () => {
    if (busy) return;
    setBusy(true);
    setTimeout(() => setBusy(false), 1400);
  };

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div>
          <div className="brand">
            <div className="brand-mark">♪</div>
            <div>
              <div className="brand-title">NEO <span>SONGS</span></div>
              <div className="brand-sub">AI music studio</div>
            </div>
          </div>

          <nav className="sidebar-nav" aria-label="Основна навигация">
            <button className="nav-item active" type="button">Създай песен</button>
            <button className="nav-item" type="button">Моята библиотека</button>
            <button className="nav-item" type="button">Проекти</button>
            <button className="nav-item" type="button">История</button>
            <button className="nav-item" type="button">Настройки</button>
          </nav>
        </div>

        <div className="sidebar-card">
          <div className="mini-label">FREE ACCESS</div>
          <h4>ACE-Step engine</h4>
          <p>Безплатната генерация зависи от наличната GPU квота в момента.</p>
          <div className="engine-row">
            <span className="engine-dot" />
            <span>Готов за заявка</span>
          </div>
        </div>
      </aside>

      <section className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">NEO SONGS PLATFORM</p>
            <h1>Твоето AI студио за музика.</h1>
          </div>

          <div className="topbar-actions">
            <div className="plan-pill">FREE • ACE-STEP</div>
            <button className="ghost-btn" type="button">Upgrade</button>
            <button className="avatar-btn" type="button" aria-label="Профил">AM</button>
          </div>
        </header>

        <section className="hero-strip">
          <div className="hero-copy">
            <p className="eyebrow">AI MUSIC STUDIO</p>
            <h2>От идея до <span>готова песен.</span></h2>
            <p>
              Текст, стил, вокал и структура — на едно място. Създавай, преработвай и пази музикалните си идеи в NEO Songs.
            </p>

            <div className="hero-points">
              <div><strong>01</strong><span>Напиши идея или текст</span></div>
              <div><strong>02</strong><span>Избери стил и вокал</span></div>
              <div><strong>03</strong><span>Генерирай и запази</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="visual-toolbar">
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-dot" />
                <div className="visual-label">NEO SESSION</div>
              </div>
              <div className="visual-screen">
                <div className="visual-grid" />
                <div className="visual-wave">
                  {Array.from({ length: 42 }).map((_, i) => (
                    <span key={i} style={{ height: `${18 + ((i * 17) % 66)}%` }} />
                  ))}
                </div>
                <div className="visual-meta">
                  <div>
                    <strong>New Session</strong>
                    <span>AI composition workspace</span>
                  </div>
                  <div className="visual-time">02:34</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="workspace-grid">
          <div className="workspace-card composer-card">
            <div className="card-head">
              <div>
                <div className="section-badge">COMPOSER</div>
                <h3>Създай нова песен</h3>
                <p>Опиши максимално ясно как искаш да звучи резултатът.</p>
              </div>
              <div className="switch-tabs">
                <button className={activeView === 'create' ? 'active' : ''} onClick={() => setActiveView('create')} type="button">Song</button>
                <button className={activeView === 'library' ? 'active' : ''} onClick={() => setActiveView('library')} type="button">Library</button>
              </div>
            </div>

            {activeView === 'create' ? (
              <>
                <div className="field">
                  <div className="field-line"><label>ИМЕ НА ПРОЕКТА</label><span>По желание</span></div>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="Напр. Summer Lights"
                    className="input"
                  />
                </div>

                <div className="field">
                  <div className="field-line"><label>ТЕКСТ НА ПЕСЕНТА</label><span>{lyrics.length} знака</span></div>
                  <textarea
                    value={lyrics}
                    onChange={(e) => setLyrics(e.target.value)}
                    className="textarea lyrics"
                    placeholder={'[Verse]\nНапиши текста си тук...\n\n[Chorus]\nТвоят припев...\n\n[Bridge]\nДобави преход или кулминация...'}
                  />
                </div>

                <div className="field">
                  <div className="field-line"><label>СТИЛ / ЗВУЧЕНЕ</label><span>{promptLength} знака</span></div>
                  <textarea
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    className="textarea stylebox"
                    placeholder="Напр. summer dance-pop, female vocal, energetic, catchy hook, radio-ready, 124 BPM..."
                  />
                </div>

                <div className="tag-list">
                  {styleTags.map((tag) => (
                    <button
                      key={tag}
                      className="tag-chip"
                      type="button"
                      onClick={() => setStyle((current) => current ? `${current}, ${tag}` : tag)}
                    >
                      + {tag}
                    </button>
                  ))}
                </div>

                <div className="triple-grid">
                  <div className="field">
                    <label>ВОКАЛ</label>
                    <select className="select" defaultValue="Женски">
                      <option>Женски</option>
                      <option>Мъжки</option>
                      <option>Дует</option>
                      <option>Инструментал</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>ЕЗИК</label>
                    <select className="select" defaultValue="English">
                      <option>English</option>
                      <option>Български</option>
                      <option>Deutsch</option>
                      <option>Español</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>ДЪЛЖИНА</label>
                    <select className="select" defaultValue="~ 2:30">
                      <option>~ 2:00</option>
                      <option>~ 2:30</option>
                      <option>~ 3:00</option>
                      <option>~ 4:00</option>
                    </select>
                  </div>
                </div>

                <div className="advanced-row">
                  <div className="field compact-field">
                    <label>BPM</label>
                    <input className="input" type="number" min="60" max="200" placeholder="Auto" />
                  </div>
                  <label className="toggle-row">
                    <span>
                      <strong>Инструментал</strong>
                      <small>Генерирай без вокал</small>
                    </span>
                    <input type="checkbox" />
                    <i />
                  </label>
                </div>

                <div className="prompt-helper">
                  <div className="helper-icon">✦</div>
                  <div>
                    <strong>По-добър prompt = по-добра песен</strong>
                    <p>Добави настроение, темпо, тип вокал, енергия и референция към жанр — без да копираш конкретна песен.</p>
                  </div>
                </div>

                <button className="primary-btn" onClick={generate} type="button">
                  <span>{busy ? 'Подготвям генерацията...' : 'СЪЗДАЙ ПЕСЕН'}</span>
                  <span className="button-icon">→</span>
                </button>
                <p className="quota-note">Безплатните генерации зависят от наличната GPU квота.</p>
              </>
            ) : (
              <div className="library-inline">
                <div className="empty-library-icon">♫</div>
                <h4>Твоята библиотека</h4>
                <p>Тук ще се появяват песните, които генерираш и запазваш.</p>
              </div>
            )}
          </div>

          <div className="workspace-side">
            <div className="workspace-card side-card">
              <div className="card-head small-gap">
                <div>
                  <div className="section-badge">ENGINE</div>
                  <h3>Статус</h3>
                </div>
                <span className="status-pill ready">Available</span>
              </div>

              <div className="status-block">
                <div className="status-ring"><span>AI</span></div>
                <div>
                  <strong>ACE-Step</strong>
                  <p>Готов за свързване към реална генерация.</p>
                </div>
              </div>

              <div className="engine-details">
                <div><span>Режим</span><strong>Free GPU</strong></div>
                <div><span>Качество</span><strong>High</strong></div>
                <div><span>Опашка</span><strong>Dynamic</strong></div>
              </div>
            </div>

            <div className="workspace-card preview-card">
              <div className="card-head small-gap">
                <div>
                  <div className="section-badge">PREVIEW</div>
                  <h3>Резултат</h3>
                </div>
                <button className="ghost-small" type="button">Open</button>
              </div>

              <div className="track-preview">
                <div className="cover-art">
                  <div className="cover-grid" />
                  <div className="cover-orb" />
                  <div className="cover-title">
                    <span className="cover-kicker">NEO SONGS</span>
                    <strong>{projectName || 'Untitled Session'}</strong>
                    <span>{style || 'Твоят резултат ще се появи тук'}</span>
                  </div>
                </div>

                <div className="player-ui">
                  <button className="play-button" type="button">▶</button>
                  <div className="player-main">
                    <div className="player-bar"><span /></div>
                    <div className="player-times"><small>0:00</small><small>0:00</small></div>
                  </div>
                </div>

                <div className="track-actions">
                  <button className="action-btn" type="button">Download</button>
                  <button className="action-btn" type="button">Remix</button>
                  <button className="action-btn" type="button">Save</button>
                </div>
              </div>
            </div>

            <div className="workspace-card history-card">
              <div className="card-head small-gap">
                <div>
                  <div className="section-badge">LIBRARY PREVIEW</div>
                  <h3>Как ще изглежда библиотеката</h3>
                </div>
              </div>

              <div className="track-list">
                {demoTracks.map((track) => (
                  <div className="track-row" key={track.title}>
                    <div className="track-thumb">♪</div>
                    <div className="track-info">
                      <strong>{track.title}</strong>
                      <span>{track.meta}</span>
                    </div>
                    <div className={`status-pill ${track.status === 'Ready' ? 'ready' : 'draft'}`}>{track.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
