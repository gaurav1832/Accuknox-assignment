// import React, { useState } from "react";
// import useDashboardStore from "../useDashboardStore";
// import { XIcon } from "@heroicons/react/solid";
// import predefinedWidgets from "../data";

// const AddWidgetForm = ({ categoryId }) => {
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(categoryId);
//   const [selectedWidgets, setSelectedWidgets] = useState([]);
//   const addWidget = useDashboardStore((state) => state.addWidget);

//   const handleAddWidgetClick = () => {
//     setIsFormVisible(true);
//   };

//   const handleCloseForm = () => {
//     setIsFormVisible(false);
//   };

//   const handleCheckboxChange = (widget) => {
//     if (selectedWidgets.includes(widget)) {
//       setSelectedWidgets(selectedWidgets.filter((w) => w.id !== widget.id));
//     } else {
//       setSelectedWidgets([...selectedWidgets, widget]);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     selectedWidgets.forEach((widget) => {
//       addWidget(selectedCategory, widget);
//     });
//     setSelectedWidgets([]);
//     setIsFormVisible(false);
//   };

//   const handleCategoryChange = (categoryId) => {
//     setSelectedCategory(categoryId);
//     setSelectedWidgets([]);
//   };

//   return (
//     <div className="relative bg-gray-100 shadow-inner p-4 h-64 rounded-lg flex items-center justify-center">
//       <button
//         onClick={handleAddWidgetClick}
//         type="button"
//         className="bg-gray-100 text-gray-500 border border-gray-300 rounded px-4 py-1 mt-2 text-sm"
//       >
//         + Add Widget
//       </button>

//       <div
//         className={`fixed top-0 right-0 w-full sm:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
//           isFormVisible ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="">
//           <div className="flex justify-between bg-indigo-900">
//             <h2 className="text-md p-2 pl-4 text-white">Add Widget</h2>
//             <h2 className="text-md bg-indigo-900 p-2 pl-4 text-white">
//               <XIcon
//                 onClick={handleCloseForm}
//                 className="h-5 w-5 cursor-pointer"
//               />
//             </h2>
//           </div>
//           <div className="flex mb-4 border-b border-gray-300">
//             {Object.keys(predefinedWidgets).map((category) => (
//               <button
//                 key={category}
//                 className={`px-4 py-2 focus:outline-none ${
//                   selectedCategory === category
//                     ? "border-b-2 border-blue-500 font-semibold"
//                     : "text-gray-500"
//                 }`}
//                 onClick={() => handleCategoryChange(category)}
//               >
//                 {category.toUpperCase()}
//               </button>
//             ))}
//           </div>

//           <form onSubmit={handleSubmit} className="flex flex-col flex-grow p-4">
//             <div className="mb-4 flex-grow overflow-y-auto">
//               <label className="block mb-2 font-semibold text-lg">
//                 Select Widgets
//               </label>
//               <div className="space-y-2">
//                 {predefinedWidgets[selectedCategory].map((widget) => (
//                   <label
//                     key={widget.id}
//                     className="flex items-center space-x-2 border border-gray-300 p-1 rounded text-sm text-gray-500"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={selectedWidgets.some((w) => w.id === widget.id)}
//                       onChange={() => handleCheckboxChange(widget)}
//                       className="form-checkbox h-4 w-4"
//                     />
//                     <span>{widget.name}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </form>
//         </div>
//         <div className="flex justify-end pt-4 mt-4 space-x-1">
//           <button
//             onClick={handleCloseForm}
//             type="button"
//             className="btn btn-secondary mr-2 px-8 py-1 text-sm rounded border border-gray-300"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="btn btn-primary px-8 py-1 text-sm bg-indigo-900 text-white rounded"
//             onClick={handleSubmit}
//           >
//             Confirm
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddWidgetForm;

// import React, { useState, useEffect } from "react";
// import useDashboardStore from "../useDashboardStore";
// import { XIcon } from "@heroicons/react/solid";
// import predefinedWidgets from "../data";

// const AddWidgetForm = ({ categoryId }) => {
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(categoryId);
//   const [selectedWidgets, setSelectedWidgets] = useState([]);

//   const addWidget = useDashboardStore((state) => state.addWidget);
//   const removeWidget = useDashboardStore((state) => state.removeWidget);
//   const isWidgetInCategory = useDashboardStore(
//     (state) => state.isWidgetInCategory
//   );

//   useEffect(() => {
//     const initiallySelectedWidgets = predefinedWidgets[
//       selectedCategory
//     ].filter((widget) => isWidgetInCategory(selectedCategory, widget.id));
//     setSelectedWidgets(initiallySelectedWidgets);
//   }, [selectedCategory, isWidgetInCategory]);

//   const handleAddWidgetClick = () => {
//     setIsFormVisible(true);
//   };

//   const handleCloseForm = () => {
//     setIsFormVisible(false);
//   };

//   const handleCheckboxChange = (widget) => {
//     if (selectedWidgets.some((w) => w.id === widget.id)) {
//       setSelectedWidgets(selectedWidgets.filter((w) => w.id !== widget.id));
//     } else {
//       setSelectedWidgets([...selectedWidgets, widget]);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     predefinedWidgets[selectedCategory].forEach((widget) => {
//       if (selectedWidgets.some((w) => w.id === widget.id)) {
//         // If checked, ensure the widget is added
//         addWidget(selectedCategory, widget);
//       } else if (isWidgetInCategory(selectedCategory, widget.id)) {
//         // If unchecked and previously added, remove the widget
//         removeWidget(selectedCategory, widget.id);
//       }
//     });

//     setSelectedWidgets([]);
//     setIsFormVisible(false);
//   };

//   const handleCategoryChange = (categoryId) => {
//     setSelectedCategory(categoryId);
//     setSelectedWidgets(
//       predefinedWidgets[categoryId].filter((widget) =>
//         isWidgetInCategory(categoryId, widget.id)
//       )
//     );
//   };

//   return (
//     <div className="relative bg-gray-100 shadow-inner p-4 h-64 rounded-lg flex items-center justify-center">
//       <button
//         onClick={handleAddWidgetClick}
//         type="button"
//         className="bg-gray-100 text-gray-500 border border-gray-300 rounded px-4 py-1 mt-2 text-sm"
//       >
//         + Add Widget
//       </button>

//       <div
//         className={`fixed top-0 right-0 w-full sm:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
//           isFormVisible ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div>
//           <div className="flex justify-between bg-indigo-900">
//             <h2 className="text-md p-2 pl-4 text-white">Add Widget</h2>
//             <h2 className="text-md bg-indigo-900 p-2 pl-4 text-white">
//               <XIcon
//                 onClick={handleCloseForm}
//                 className="h-5 w-5 cursor-pointer"
//               />
//             </h2>
//           </div>
//           <div className="flex mb-4 border-b border-gray-300">
//             {Object.keys(predefinedWidgets).map((category) => (
//               <button
//                 key={category}
//                 className={`px-4 py-2 focus:outline-none ${
//                   selectedCategory === category
//                     ? "border-b-2 border-blue-500 font-semibold"
//                     : "text-gray-500"
//                 }`}
//                 onClick={() => handleCategoryChange(category)}
//               >
//                 {category.toUpperCase()}
//               </button>
//             ))}
//           </div>

//           <form onSubmit={handleSubmit} className="flex flex-col flex-grow p-4">
//             <div className="mb-4 flex-grow overflow-y-auto">
//               <label className="block mb-2 font-semibold text-lg">
//                 Select Widgets
//               </label>
//               <div className="space-y-2">
//                 {predefinedWidgets[selectedCategory].map((widget) => (
//                   <label
//                     key={widget.id}
//                     className="flex items-center space-x-2 border border-gray-300 p-1 rounded text-sm text-gray-500"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={selectedWidgets.some((w) => w.id === widget.id)}
//                       onChange={() => handleCheckboxChange(widget)}
//                       className="form-checkbox h-4 w-4"
//                     />
//                     <span>{widget.name}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </form>
//         </div>
//         <div className="flex justify-end pt-4 mt-4 space-x-1">
//           <button
//             onClick={handleCloseForm}
//             type="button"
//             className="btn btn-secondary mr-2 px-8 py-1 text-sm rounded border border-gray-300"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="btn btn-primary px-8 py-1 text-sm bg-indigo-900 text-white rounded"
//             onClick={handleSubmit}
//           >
//             Confirm
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddWidgetForm;

import React, { useState, useEffect } from "react";
import useDashboardStore from "../useDashboardStore";
import { XIcon } from "@heroicons/react/solid";
import predefinedWidgets from "../data";

const AddWidgetForm = ({ categoryId }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categoryId);
  const [selectedWidgets, setSelectedWidgets] = useState([]);
  const addWidget = useDashboardStore((state) => state.addWidget);
  const removeWidget = useDashboardStore((state) => state.removeWidget);
  const isWidgetInCategory = useDashboardStore(
    (state) => state.isWidgetInCategory
  );

  // Open the form
  const handleAddWidgetClick = () => {
    setIsFormVisible(true);
  };

  // Close the form
  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  // Handle widget checkbox selection
  const handleCheckboxChange = (widget) => {
    if (selectedWidgets.includes(widget)) {
      setSelectedWidgets(selectedWidgets.filter((w) => w.id !== widget.id));
    } else {
      setSelectedWidgets([...selectedWidgets, widget]);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get all widgets that are already in the dashboard for the selected category
    const currentWidgets = predefinedWidgets[
      selectedCategory
    ].filter((widget) => isWidgetInCategory(selectedCategory, widget.id));

    // Widgets to add: selectedWidgets that are not in currentWidgets
    const widgetsToAdd = selectedWidgets.filter(
      (widget) => !isWidgetInCategory(selectedCategory, widget.id)
    );

    // Widgets to remove: currentWidgets that are not in selectedWidgets
    const widgetsToRemove = currentWidgets.filter(
      (widget) => !selectedWidgets.some((w) => w.id === widget.id)
    );

    // Add and remove widgets accordingly
    widgetsToAdd.forEach((widget) => addWidget(selectedCategory, widget));
    widgetsToRemove.forEach((widget) =>
      removeWidget(selectedCategory, widget.id)
    );

    // Reset and close form
    setSelectedWidgets([]);
    setIsFormVisible(false);
  };

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedWidgets([]);
  };

  // Pre-select widgets that are already in the category
  useEffect(() => {
    const preSelectedWidgets = predefinedWidgets[
      selectedCategory
    ].filter((widget) => isWidgetInCategory(selectedCategory, widget.id));
    setSelectedWidgets(preSelectedWidgets);
  }, [selectedCategory, isWidgetInCategory]);

  return (
    <div className="relative bg-gray-100 shadow-inner p-4 h-64 rounded-lg flex items-center justify-center">
      <button
        onClick={handleAddWidgetClick}
        type="button"
        className="bg-gray-100 text-gray-500 border border-gray-300 rounded px-4 py-1 mt-2 text-sm"
      >
        + Add Widget
      </button>

      <div
        className={`fixed top-0 right-0 w-full sm:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isFormVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="">
          <div className="flex justify-between bg-indigo-900">
            <h2 className="text-md p-2 pl-4 text-white">Add Widget</h2>
            <h2 className="text-md bg-indigo-900 p-2 pl-4 text-white">
              <XIcon
                onClick={handleCloseForm}
                className="h-5 w-5 cursor-pointer"
              />
            </h2>
          </div>
          <div className="flex mb-4 border-b border-gray-300">
            {Object.keys(predefinedWidgets).map((category) => (
              <button
                key={category}
                className={`px-4 py-2 focus:outline-none ${
                  selectedCategory === category
                    ? "border-b-2 border-blue-500 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col flex-grow p-4">
            <div className="mb-4 flex-grow overflow-y-auto">
              <label className="block mb-2 font-semibold text-lg">
                Select Widgets
              </label>
              <div className="space-y-2">
                {predefinedWidgets[selectedCategory].map((widget) => (
                  <label
                    key={widget.id}
                    className="flex items-center space-x-2 border border-gray-300 p-1 rounded text-sm text-gray-500"
                  >
                    <input
                      type="checkbox"
                      checked={selectedWidgets.some((w) => w.id === widget.id)}
                      onChange={() => handleCheckboxChange(widget)}
                      className="form-checkbox h-4 w-4"
                    />
                    <span>{widget.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-end pt-4 mt-4 space-x-1">
          <button
            onClick={handleCloseForm}
            type="button"
            className="btn btn-secondary mr-2 px-8 py-1 text-sm rounded border border-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary px-8 py-1 text-sm bg-indigo-900 text-white rounded"
            onClick={handleSubmit}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetForm;
