import Card from "./Card";
import "./Education.css";
import UnderlineText from "./UnderlineText";

function Education() {
	return (
		<Card>
			<UnderlineText>Education</UnderlineText>

			<div className='education'>
				<table className='education-table'>
					{/* PSG - start */}
					<tr>
						<td className='school-name school-number'>1.</td>
						<td className='school-name'>PSG College of Technology</td>
						<td className='school-place'>
							<b>Coimbatore, India</b>
						</td>
					</tr>
					<tr>
						<td></td>
						<td className='school-degree'>
							<i>Bachelor of Technology (Information Technology)</i>
						</td>

						<td className='school-year'>
							<i>2020 - 2024</i>
						</td>
					</tr>
					<tr>
						<td></td>
						<td className='school-score'>🌟 CGPA : 9.19</td>

						<td></td>
					</tr>
					{/* PSG - end */}
					{/* Vikas - start */}
					<tr>
						<td className='school-name school-number'>2.</td>
						<td className='school-name'>
							Vikas Vidayalaya Matric. Hr. Sec. School
						</td>
						<td className='school-place'>
							<b>Tiruppur, India</b>
						</td>
					</tr>
					<tr>
						<td></td>
						<td className='school-degree'>
							<i>Higher Secondary School Leaving Certificate</i>
						</td>

						<td className='school-year'>
							<i>2018 - 2020</i>
						</td>
					</tr>
					<tr>
						<td></td>
						<td className='school-score'>🌟 Percentage : 94.5 %</td>

						<td></td>
					</tr>
					{/* Vikas - end */}
					{/* Joseph's - start */}
					<tr>
						<td className='school-name school-number'>3.</td>
						<td className='school-name'>
							St. Joseph's Matric. Hr. Sec. School
						</td>
						<td className='school-place'>
							<b>Tiruppur, India</b>
						</td>
					</tr>
					<tr>
						<td></td>
						<td className='school-degree'>
							<i>Secondary School Leaving Certificate</i>
						</td>

						<td className='school-year'>
							<i>2006 - 2018</i>
						</td>
					</tr>
					<tr>
						<td></td>
						<td className='school-score'>🌟 Percentage : 94.6 %</td>

						<td></td>
					</tr>
					{/* Joseph's - end */}
				</table>
			</div>
		</Card>
	);
}

export default Education;
