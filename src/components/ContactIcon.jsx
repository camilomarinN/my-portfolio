import clsx from 'clsx';

const colorMap = {
  green: 'hover:text-green-400',
  blue: 'hover:text-blue-400',
  gray: 'hover:text-gray-400',
};

export default function IconContact({Icon, url, label, hoverColor}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={clsx(
        'text-white transition duration-300 transform hover:scale-125 hover:drop-shadow-md animated-text',
        colorMap[hoverColor]
      )}
    >
      <Icon className="w-15 h-15 mt-5" />
    </a>
  )
}
