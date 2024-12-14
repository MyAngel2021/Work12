import './sources.css';
import { ISourceResponse,ISource } from 'types/interfaces';

    

class Sources {
    draw(data:ISource[]):void {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp:HTMLElement|null = document.querySelector('#sourceItemTemp');
        
        if (sourceItemTemp) {
        data.forEach((item) => {
            const sourceClone:HTMLElement = sourceItemTemp.content.cloneNode(true);
            if (sourceClone) {
            if (sourceClone.querySelector('.source__item-name')) {
            sourceClone.querySelector('.source__item-name').textContent = item.name; }
            if (item.id) {
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);
        }
            fragment.append(sourceClone);
        }
        });
        const sources = document.querySelector('.sources') as HTMLElement;
        if (sources) {
            sources.append(fragment);
        }
       
    }
}
}

export default Sources;
