interface PanelItem {
  number: number;
  title: string;
  description: string;
}

interface ExplanationPanelProps {
  title: string;
  icon: string;
  items: PanelItem[];
}

export default function ExplanationPanel({ title, icon, items }: ExplanationPanelProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'list-ol':
        return (
          <svg className="w-6 h-6 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 rounded-2xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        {getIcon(icon)}
        {title}
      </h2>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
              {item.number}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
