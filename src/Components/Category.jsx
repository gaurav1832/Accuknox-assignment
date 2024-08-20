import React from "react";
import Widget from "./Widget";
import AddWidgetForm from "./AddWidgetForm";

const Category = ({ category }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-700 mb-4">{category.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
        {category.widgets.map((widget) => (
          <Widget key={widget.id} categoryId={category.id} widget={widget} />
        ))}
        <AddWidgetForm categoryId={category.id} />
      </div>
    </div>
  );
};

export default Category;
