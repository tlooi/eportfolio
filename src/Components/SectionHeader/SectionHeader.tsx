import './SectionHeader.css';

function SectionHeader({ id, content }: { id: string, content: string }) {
    return (
        <div>
            <p id={id}>{content}</p>
            <style dangerouslySetInnerHTML={{
                __html: `
                    #${id} {
                        position: relative;
                        font-size: 20px;
                        z-index: -1;
                    }
                    #${id}::after {
                        content: '${content}';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        font-size: 50px;
                        color: rgba(0, 0, 0, 5%);
                    }
                `
            }} />
        </div>
    );
}

export default SectionHeader;