import './BlocksPage.css';
import { Skeleton } from 'antd';

const BlocksPage = () => {
    return (
        <div className="main-page">
            <div className="container">
                <h1 className='chunk-evaluator-title'>Chunk Evaluator</h1>
                <div className="first-list-blocks">
                    <div className="slippage-attempts">
                        <h1 className='block-title'><Skeleton.Input active style={{width: '190px'}}/></h1>
                        <p className='block-text'><Skeleton.Button  active /></p>
                        <p className='block-input'><Skeleton.Input  active /></p>
                    </div>
                    <div className="prop-weak-discount-percent">
                        <h1 className='block-title'><Skeleton.Input active style={{width: '230px'}}/></h1>
                        <p className='block-text'><Skeleton.Button  active /></p>
                        <p className='block-input'><Skeleton.Input  active /></p>
                    </div>
                    <div className="prop-special-min-chunk-eth">
                        <h1 className='block-title'><Skeleton.Input active style={{width: '220px'}}/></h1>
                        <p className='block-text'><Skeleton.Button  active style={{width: '75px'}}/></p>
                        <p className='block-input'><Skeleton.Input  active /></p>
                    </div>
                    <div className="arbitrage-cover-min-gas-used">
                        <h1 className='block-title'><Skeleton.Input active style={{width: '220px'}}/></h1>
                        <p className='block-text'><Skeleton.Button  active style={{width: '90px'}}/></p>
                        <p className='block-input'><Skeleton.Input  active /></p>
                    </div>
                </div>
                <h1>Chunk Estimator</h1>
                <div className="second-list-blocks">
                    <div className="gas-limit-correction-percent">
                        <h1 className='block-title'><Skeleton.Input active style={{width: '230px'}}/></h1>
                        <p className='block-text'><Skeleton.Button  active/></p>
                        <p className='block-input'><Skeleton.Input  active/></p>
                    </div>
                    <div className="access-list-enabled">
                        <h1 className='block-title'><Skeleton.Input active style={{width: '205px'}}/></h1>
                        <p className='block-text'><Skeleton.Button  active/></p>
                        <p className='block-input'><Skeleton.Input  active/></p>
                    </div>
                </div>
                <h1>Token Pricer</h1>
                <div className="third-list-blocks">
                    <div className="price-cache-time-seconds">
                        <h1 className='block-title'><Skeleton.Input active style={{width: '210px'}}/></h1>
                        <p className='block-text'><Skeleton.Button  active/></p>
                        <p className='block-input'><Skeleton.Input  active/></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlocksPage;