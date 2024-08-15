import { X, Pin, PinOff } from "lucide-react";
import { FC } from "react";

interface IRecentItem {
  name: string;
  path: string;
}

interface PinShortcutModalProps {
  isOpen: boolean;
  onClose: () => void;
  recentItems: IRecentItem[];
  pinnedItems: string[];
  togglePin: (path: string) => void;
}

const PinShortcutModal: FC<PinShortcutModalProps> = ({
  isOpen,
  onClose,
  recentItems,
  pinnedItems,
  togglePin,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-labelledby="pin-shortcut-modal-title"
      aria-modal="true"
    >
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 id="pin-shortcut-modal-title" className="text-xl font-semibold">
            Shortcuts
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="focus:outline-none"
          >
            <X className="h-6 w-6 text-gray-500 hover:text-gray-700 transition-colors duration-150" />
          </button>
        </div>
        <div className="space-y-4">
          {recentItems.length === 0 ? (
            <p className="text-gray-500">No recent items to pin/unpin</p>
          ) : (
            recentItems.map((item) => (
              <div
                key={item.path}
                className="flex justify-between items-center cursor-pointer p-2 border-b hover:bg-gray-100 transition-colors duration-150"
                onClick={() => togglePin(item.path)}
                role="button"
                aria-pressed={pinnedItems.includes(item.path)}
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
