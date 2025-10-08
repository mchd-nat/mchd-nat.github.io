import "./Tabs.css";

function Tabs({ onClick, title, index, activeTab }) {
  const isActiveTab = activeTab === index;

  return (
    <div className="tagButton">
      <button
        className={isActiveTab ? "active" : ""}
        onClick={() => onClick(index)}
      >
        {title}
      </button>
    </div>
  );
}

export default Tabs;
