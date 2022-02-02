{cat.map((category) => {
    <div
      className="category-item"
      style={{ borderRight: `5px solid ${category.color}` }}
      key={category.id}
      onClick={() => handleCategory(category)}
    >
      <label>{category.title}</label>
      <img src={category.icon.default} alt={category.title} />
    </div>;
  })}