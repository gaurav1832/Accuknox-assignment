import create from "zustand";

const useDashboardStore = create((set, get) => ({
  categories: JSON.parse(localStorage.getItem("dashboardCategories")) || [
    {
      id: "cspm",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "widget-1",
          name: "Cloud Accounts",
          text: "",
          graphData: {
            connected: 5,
            notConnected: 5,
          },
        },
        {
          id: "widget-2",
          name: "Cloud Account Risk Assessment",
          text: "",
          graphData: {
            passed: 9482,
            failed: 2312,
            warning: 742,
            notAvailable: 56,
          },
        },
      ],
    },
    {
      id: "cwpp",
      name: "CWPP Dashboard",
      widgets: [
        {
          id: "widget-1",
          name: "Top 5 Namespace Specific Alerts",
          text: "Random text for Top 5 Namespace Specific Alerts",
          graphData: {},
        },
        {
          id: "widget-2",
          name: "Workload Alerts",
          text: "Random text for Workload Alerts",
          graphData: {},
        },
      ],
    },
    {
      id: "image",
      name: "Registry Scan",
      widgets: [
        {
          id: "widget-1",
          name: "Image Risk Assessment",
          text: "",
          graphData: {
            total: 1470,
            critical: 9,
            high: 150,
            moderate: 230,
            normal: 481,
            safe: 600,
          },
        },
        {
          id: "widget-2",
          name: "Image Security Issues",
          text: "",
          graphData: {
            total: 31,
            critical: 2,
            high: 1,
            moderate: 5,
            normal: 10,
            safe: 13,
          },
        },
      ],
    },
  ],

  addWidget: (categoryId, widget) =>
    set((state) => {
      const newCategories = state.categories.map((category) =>
        category.id === categoryId
          ? { ...category, widgets: [...category.widgets, widget] }
          : category
      );

      localStorage.setItem(
        "dashboardCategories",
        JSON.stringify(newCategories)
      );

      return { categories: newCategories };
    }),

  removeWidget: (categoryId, widgetId) =>
    set((state) => {
      const newCategories = state.categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.filter(
                (widget) => widget.id !== widgetId
              ),
            }
          : category
      );

      localStorage.setItem(
        "dashboardCategories",
        JSON.stringify(newCategories)
      );

      return { categories: newCategories };
    }),

  toggleWidgetSelection: (categoryId, widgetId) =>
    set((state) => {
      const selectedWidgets = { ...state.selectedWidgets };
      if (!selectedWidgets[categoryId]) {
        selectedWidgets[categoryId] = new Set();
      }

      if (selectedWidgets[categoryId].has(widgetId)) {
        selectedWidgets[categoryId].delete(widgetId);
      } else {
        selectedWidgets[categoryId].add(widgetId);
      }

      return { selectedWidgets };
    }),

  isWidgetInCategory: (categoryId, widgetId) => {
    const category = get().categories.find((cat) => cat.id === categoryId);
    return category?.widgets.some((widget) => widget.id === widgetId);
  },

  searchResults: [],

  searchWidgets: (query) =>
    set((state) => {
      const searchResults = [];
      state.categories.forEach((category) => {
        category.widgets.forEach((widget) => {
          if (
            widget.name.toLowerCase().includes(query.toLowerCase()) ||
            widget.text.toLowerCase().includes(query.toLowerCase())
          ) {
            searchResults.push({ ...widget, category: category.name });
          }
        });
      });
      return { searchResults };
    }),
}));

export default useDashboardStore;
