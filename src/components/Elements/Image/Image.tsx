interface ImageProps {
	imageSource: string;
	imageAlt: string;
	className?: string;
}

const Image = ({ imageSource, imageAlt, className = '' }: ImageProps) => {
	return <img src={imageSource} alt={imageAlt} className={className} />;
};

export default Image;
