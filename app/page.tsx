'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Tasks', 'Studio Brain', 'Follow-ups', 'Settings'];

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#F7F5F0',
        color: '#292820',
        fontFamily: 'Arial, sans-serif',
        padding: '32px',
      }}
    >
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '36px',
        }}
      >
        <div>
          <p
            style={{
              fontSize: '12px',
              letterSpacing: '3px',
              color: '#827B6D',
            }}
          >
            YOUR STUDIO, IN SYNC
          </p>
          <h1 style={{ fontSize: '32px', margin: '8px 0' }}>
            StudioOS<span style={{ color: '#A17B58' }}>.</span>
          </h1>
          <p style={{ color: '#777367', margin: 0 }}>
            A calmer way to run your studio.
          </p>
        </div>

        <div
          style={{
            border: '1px solid #DED9CE',
            borderRadius: '12px',
            padding: '12px 16px',
            background: '#FFFFFF',
          }}
        >
          <span style={{ fontSize: '13px', color: '#777367' }}>WORKSPACE</span>
          <p style={{ margin: '5px 0 0', fontWeight: 'bold' }}>My Studio</p>
        </div>
      </header>

      <nav
        style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          borderBottom: '1px solid #DED9CE',
          paddingBottom: '16px',
          marginBottom: '32px',
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '10px 16px',
              borderRadius: '9px',
              border: '1px solid',
              borderColor: activeTab === tab ? '#292820' : '#DED9CE',
              background: activeTab === tab ? '#292820' : '#FFFFFF',
              color: activeTab === tab ? '#FFFFFF' : '#4D4A41',
              cursor: 'pointer',
            }}
          >
            {tab}
          </button>
        ))}
      </nav>

      <section>
        <p
          style={{
            fontSize: '12px',
            letterSpacing: '2px',
            color: '#827B6D',
          }}
        >
          STUDIO OVERVIEW
        </p>

        <h2 style={{ fontSize: '28px', margin: '10px 0' }}>
          {activeTab === 'Overview' ? 'Good to have you here.' : activeTab}
        </h2>

        <p style={{ color: '#777367', lineHeight: 1.7 }}>
          {activeTab === 'Overview'
            ? 'Your studio operations, all in one place.'
            : `Your ${activeTab.toLowerCase()} workspace will live here.`}
        </p>

        {activeTab === 'Overview' ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginTop: '28px',
            }}
          >
            {[
              {
                title: 'Task Manager',
                description: 'Organise work, owners, priorities and due dates.',
                number: '01',
              },
              {
                title: 'Studio Brain',
                description:
                  'Keep your studio procedures and knowledge together.',
                number: '02',
              },
              {
                title: 'Follow-ups',
                description:
                  'Keep track of outstanding conversations and actions.',
                number: '03',
              },
              {
                title: 'Owner Dashboard',
                description:
                  "See priorities, decisions and your team's workload.",
                number: '04',
              },
            ].map((item) => (
              <article
                key={item.number}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E0D6',
                  borderRadius: '16px',
                  padding: '24px',
                }}
              >
                <p
                  style={{
                    color: '#A17B58',
                    fontSize: '12px',
                    letterSpacing: '1px',
                  }}
                >
                  MODULE {item.number}
                </p>
                <h3 style={{ fontSize: '19px' }}>{item.title}</h3>
                <p
                  style={{
                    color: '#777367',
                    fontSize: '14px',
                    lineHeight: 1.7,
                  }}
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div
            style={{
              marginTop: '28px',
              background: '#FFFFFF',
              border: '1px solid #E5E0D6',
              borderRadius: '16px',
              padding: '28px',
            }}
          >
            <p style={{ margin: 0 }}>
              This section is part of the StudioOS V10 roadmap.
            </p>
          </div>
        )}
      </section>

      <footer
        style={{
          marginTop: '64px',
          paddingTop: '20px',
          borderTop: '1px solid #DED9CE',
          color: '#827B6D',
          fontSize: '12px',
        }}
      >
        STUDIOOS V10 · EARLY DEVELOPMENT
      </footer>
    </main>
  );
}
