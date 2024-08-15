import { X, Pin, PinOff } from "lucide-react"; // Ensure correct import

const PinShortcutModal = ({ isOpen, onClose, recentItems, pinnedItems, togglePin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-1/3 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Pin/Unpin Shortcuts</h2>
          <button onClick={onClose}>
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        <div className="space-y-4">
          {recentItems.length === 0 ? (
            <p>No recent items to pin/unpin</p>
          ) : (
            recentItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center cursor-pointer p-2 border-b"
                onClick={() => togglePin(item.path)}
              >
                <span>{item.name}</span>
                {pinnedItems.includes(item.path) ? (
                  <PinOff className="h-5 w-5 text-green-500" />
                ) : (
                  <Pin className="h-5 w-5 text-red-500" />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PinShortcutModal;
