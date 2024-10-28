<?php
$size = $_POST["size"];
if($size > 0)
{
	echo "<table border='1'>";
	echo "<tr><td></td>";
	for($row = 1; $row <= $size; $row++)
	{
		echo "<th>$row</th>";
	}
	echo "<tr>";
	for($col = 1; $col <= $size; $col++)
	{
		echo "<tr>";
		echo "<th>$col</th>";
		for ($row = 1; $row <= $size; $row++)
		{
			$num = $col * $row;
			echo "<td>$num</td>";
		}
		echo"</tr>";
	}
	echo "</table>";
}
else
{
	echo "<p> Please enter a positive integer</p>";
}
?>
