import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Home, Briefcase, DollarSign, FolderOpen, GitBranch, BookOpen, HelpCircle, Mail, Users, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const commands = [
  { id: 'home', label: 'Home', icon: Home, path: '/', shortcut: 'H' },
  { id: 'services', label: 'Services', icon: Briefcase, path: '/services', shortcut: 'S' },
  { id: 'pricing', label: 'Pricing', icon: DollarSign, path: '/pricing', shortcut: 'P' },
  { id: 'portfolio', label: 'Portfolio', icon: FolderOpen, path: '/portfolio', shortcut: 'F' },
  { id: 'process', label: 'Process', icon: GitBranch, path: '/process', shortcut: 'R' },
  { id: 'case-studies', label: 'Case Studies', icon: BookOpen, path: '/case-studies', shortcut: 'C' },
  { id: 'blog', label: 'Blog', icon: FileText, path: '/blog', shortcut: 'B' },
  { id: 'faq', label: 'FAQ', icon: HelpCircle, path: '/faq', shortcut: 'Q' },
  { id: 'contact', label: 'Contact', icon: Mail, path: '/contact', shortcut: 'M' },
  { id: 'careers', label: 'Careers', icon: Users, path: '/careers', shortcut: 'J' },
  { id: 'about', label: 'About', icon: Users, path: '/about', shortcut: 'A' },
];

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = useCallback((command: typeof commands[0]) => {
    navigate(command.path);
    setIsOpen(false);
    setSearchQuery('');
    setSelectedIndex(0);
  }, [navigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleArrowKeys = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
        e.preventDefault();
        handleSelect(filteredCommands[selectedIndex]);
      }
    };

    window.addEventListener('keydown', handleArrowKeys);
    return () => window.removeEventListener('keydown', handleArrowKeys);
  }, [isOpen, filteredCommands, selectedIndex, handleSelect]);

  // Reset selected index when search query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg z-[201]"
          >
            <div className="bg-white dark:bg-primary rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-white/10">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-white/10">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search pages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder:text-gray-400"
                  autoFocus
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <div className="max-h-[300px] overflow-y-auto py-2">
                {filteredCommands.length === 0 ? (
                  <div className="px-4 py-8 text-center text-gray-500">
                    No results found
                  </div>
                ) : (
                  filteredCommands.map((command, index) => {
                    const Icon = command.icon;
                    return (
                      <button
                        key={command.id}
                        onClick={() => handleSelect(command)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                          index === selectedIndex
                            ? 'bg-accent/10 dark:bg-accent/20'
                            : 'hover:bg-gray-50 dark:hover:bg-white/5'
                        }`}
                      >
                        <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        <span className="flex-1 text-gray-900 dark:text-white">{command.label}</span>
                        <span className="text-xs text-gray-400 bg-gray-100 dark:bg-white/10 px-2 py-1 rounded">
                          ⌘{command.shortcut}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>
              <div className="px-4 py-2 bg-gray-50 dark:bg-white/5 border-t border-gray-100 dark:border-white/10 text-xs text-gray-500 flex items-center justify-between">
                <span>Press ⌘K to toggle</span>
                <span>↑↓ to navigate, ↵ to select</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
