'use client';

import { useState } from 'react';

export default function Home() {
  const [busy, setBusy] = useState(false);

  return (
    <main>
      <header>
        <b><i>♪</i> NEO <span>SONGS</span></b>
        <div className="credit">FREE • ACE-STEP</div>
      </header>

      <section className="hero">
        <p className="eyebrow">AI MUSIC STUDIO</p>
        <h1>Превърни идеята си<br/><em>в истинска песен.</em></h1>
        <p className="sub">Напиши текст, избери стил и създай музика с AI.</p>
      </section>

      <section className="studio">
        <div className="tabs">
          <strong>Създай песен</strong>
          <span>Моята библиотека</span>
        </div>

        <label>ТЕКСТ НА ПЕСЕНТА</label>
        <textarea placeholder={"[Verse]\nНапиши текста си тук...\n\n[Chorus]\nТвоят припев..."} />

        <label>СТИЛ / ЗВУЧЕНЕ</label>
        <textarea className="style" placeholder="Напр. summer dance-pop, female vocal, energetic, 124 BPM..." />

        <div className="row">
          <div>
            <label>ВОКАЛ</label>
            <select defaultValue="Женски">
              <option>Женски</option>
              <option>Мъжки</option>
              <option>Инструментал</option>
            </select>
          </div>
          <div>
            <label>ЕЗИК</label>
            <select defaultValue="English">
              <option>English</option>
              <option>Български</option>
              <option>Deutsch</option>
            </select>
          </div>
        </div>

        <button onClick={() => {
          setBusy(true);
          setTimeout(() => setBusy(false), 1200);
        }}>
          {busy ? 'Подготвям генерацията...' : '✦ СЪЗДАЙ ПЕСЕН'}
        </button>

        <p className="note">Безплатните генерации зависят от наличната GPU квота.</p>
      </section>
    </main>
  );
}
