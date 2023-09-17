import React, { useState } from 'react';
import './Value.css';
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
	AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from './../../utils/accordion';

const Value = () => {
	const [className, setClassName] = useState(null);
	return (
		<section className="v-wrapper">
			<div className="paddings innerWidth flexCenter v-container">
				{/* Left Section */}
				<div className="v-left">
					<div className="image-container">
						<img src="./value.png" alt="image" />
					</div>
				</div>
				{/* Right Section */}
				<div className="flexColStart v-right">
					<span className="orangeText">Our Value</span>
					<span className="primaryText">Value We Give to You</span>
					<span className="secondaryText">
						We always ready to help by providing the best sevices for you.
						<br />
						We believe a good blace to live can make your life better.
					</span>
					<Accordion
						className="accordion"
						allowMultipleExpanded={false}
						preExpanded={[0]}
					>
						{data.map((item, i) => {
							return (
								<AccordionItem
									className={`accordionItem ${className}`}
									key={i}
									uuid={i}
								>
									<AccordionItemHeading>
										<AccordionItemButton className="flexCenter accordionButton">
											<AccordionItemState>
												{({ expanded }) =>
													expanded
														? setClassName('expanded')
														: setClassName('collapsed')
												}
											</AccordionItemState>
											<div className="flexCenter icon">{item.icon}</div>
											<span className="primaryText">{item.heading}</span>
											<div className="flexCenter icon">
												<MdOutlineArrowDropDown size={20} />
											</div>
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p className="secondaryText">{item.detail}</p>
									</AccordionItemPanel>
								</AccordionItem>
							);
						})}
					</Accordion>
				</div>
			</div>
		</section>
	);
};

export default Value;
