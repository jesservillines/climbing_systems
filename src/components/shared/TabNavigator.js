import React, { useState, useEffect } from 'react';

const TabNavigator = ({ tabGroups, defaultActiveGroup, defaultActiveTab }) => {
  // Ensure we have valid tabGroups before proceeding
  if (!tabGroups || Object.keys(tabGroups).length === 0) {
    return <div>No tab groups provided</div>;
  }
  
  // Get safe initial values
  const firstGroupKey = Object.keys(tabGroups)[0];
  const initialGroup = defaultActiveGroup && tabGroups[defaultActiveGroup] ? defaultActiveGroup : firstGroupKey;
  
  const [activeGroup, setActiveGroup] = useState(initialGroup);
  
  // Make sure we have tabs in the active group
  const safeTabGroup = tabGroups[activeGroup] || [];
  const firstTabId = safeTabGroup.length > 0 ? safeTabGroup[0].id : null;
  
  // Set safe initial tab value
  const initialTab = defaultActiveTab || firstTabId;
  const [activeTab, setActiveTab] = useState(initialTab);
  
  // Update active tab when group changes to ensure it's always valid
  useEffect(() => {
    if (tabGroups[activeGroup] && tabGroups[activeGroup].length > 0) {
      const validTabs = tabGroups[activeGroup].map(tab => tab.id);
      if (!validTabs.includes(activeTab)) {
        setActiveTab(tabGroups[activeGroup][0].id);
      }
    }
  }, [activeGroup, activeTab, tabGroups]);

  const handleGroupChange = (groupId) => {
    if (tabGroups[groupId] && tabGroups[groupId].length > 0) {
      setActiveGroup(groupId);
      setActiveTab(tabGroups[groupId][0].id); // Select first tab in the group
    }
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tab-navigator">
      {/* Main Group Tabs */}
      <div className="group-tabs" style={{ 
        display: 'flex', 
        backgroundColor: '#f8f9fa',
        borderBottom: '2px solid #e9ecef',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        {Object.keys(tabGroups).map(groupId => (
          <button
            key={groupId}
            onClick={() => handleGroupChange(groupId)}
            className={`group-tab ${activeGroup === groupId ? 'active' : ''}`}
            style={{
              padding: '0.85rem 1.5rem',
              backgroundColor: activeGroup === groupId ? 'white' : 'transparent',
              color: activeGroup === groupId ? 'var(--primary-color)' : '#666',
              fontWeight: activeGroup === groupId ? 'bold' : 'normal',
              fontSize: '1.1rem',
              border: 'none',
              borderTopLeftRadius: '6px',
              borderTopRightRadius: '6px',
              cursor: 'pointer',
              position: 'relative',
              marginRight: '0.25rem',
              whiteSpace: 'nowrap'
            }}
          >
            {groupId.charAt(0).toUpperCase() + groupId.slice(1).replace(/-/g, ' ')}
            {activeGroup === groupId && (
              <div style={{
                position: 'absolute',
                bottom: '-2px',
                left: 0,
                right: 0,
                height: '2px',
                backgroundColor: 'var(--primary-color)'
              }}></div>
            )}
          </button>
        ))}
      </div>

      {/* Sub Tabs - Only render if we have tabs in the active group */}
      {tabGroups[activeGroup] && tabGroups[activeGroup].length > 0 ? (
        <div className="sub-tabs" style={{ 
          display: 'flex', 
          backgroundColor: 'white',
          borderBottom: '1px solid #e9ecef',
          padding: '0 1rem',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          {tabGroups[activeGroup].map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`sub-tab ${activeTab === tab.id ? 'active' : ''}`}
              style={{
                padding: '0.75rem 1.25rem',
                backgroundColor: 'transparent',
                color: activeTab === tab.id ? 'var(--primary-color)' : '#666',
                fontWeight: activeTab === tab.id ? 'bold' : 'normal',
                border: 'none',
                borderBottom: activeTab === tab.id ? '2px solid var(--primary-color)' : '2px solid transparent',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {tab.label || 'Untitled Tab'}
            </button>
          ))}
        </div>
      ) : (
        <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderBottom: '1px solid #e9ecef' }}>
          <p style={{ margin: 0, color: '#666' }}>No tabs available in this group</p>
        </div>
      )}

      {/* Content - Safely render active tab content */}
      <div className="tab-content" style={{ padding: '1.5rem 0' }}>
        {tabGroups[activeGroup] && tabGroups[activeGroup].length > 0 ? (
          tabGroups[activeGroup]
            .filter(tab => tab.id === activeTab)
            .map(tab => (
              <div key={tab.id}>
                {tab.content || (
                  <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
                    <p>No content available for this tab.</p>
                  </div>
                )}
              </div>
            ))
        ) : (
          <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
            <p>No content available.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .group-tabs::-webkit-scrollbar, .sub-tabs::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TabNavigator;
