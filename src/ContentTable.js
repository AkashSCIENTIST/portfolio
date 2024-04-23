import "./ContentTable.css";

function ContentTable({title, body, subtable = false}){ 
    return (
			<>
				{subtable && (
					<>
						<hr className='sub-table-ruler'></hr>
						<br></br>
					</>
				)}
				<table className='content-table'>
					<tr className='content-table-row'>
						{!subtable && (
							<>
								<td className='content-table-title'>{title}</td>
								<td className='content-table-body'>{body}</td>
							</>
						)}
						{subtable && (
							<>
								<td className='sub-table-title'>{title}</td>
								<td className='sub-table-body'>{body}</td>
							</>
						)}
					</tr>
				</table>
			</>
		);
}

export default ContentTable;