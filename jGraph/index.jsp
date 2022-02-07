<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Insert title here</title>
    <script src="jquery-1.10.1.min.js"></script>
    <script src="jquery-1.10.2.js"></script>
    <script src="jquery-ui.js"></script>
    <script src="jquery.ptTimeSelect.js"></script>
    <link rel="stylesheet" href="jquery.ptTimeSelect.css">
    <link rel="stylesheet" href="jquery-ui.css">

    <script src="highcharts.js"></script>
    <script src="exporting.js"></script>
    <script src="plot.js"></script>


</head>

<body style="font-family: 'Arial', sans-serif;
font-weight: 500;
font-size: 12px;
line-height: 1.5;background-color: #f1f1f1;">

    <div style="height: 20px;display: block;"> </div>
    <div id="container" style="min-width: 900px; height: 400px; margin: 0 auto;overflow: auto;"></div>
    <div style="height: 20px;display: block;"> </div>
    <div style="height: 590px;width: 400px; padding: 20px;background-color: white;">
        <form method="post">
            <table style="font-weight: bold;">
                <tr>
                    <td>Time From : </td>
                    <td><input id="timeFrom" size="10" maxlength="10"><input id="hourFrom" size="5" maxlength="5"></td>
                </tr>
                <tr>
                    <td>Time To : </td>
                    <td><input id="timeTo" size="10" maxlength="10"><input id="hourTo" size="5" maxlength="5"></td>
                </tr>
                <tr>
                    <td>Furnace Temp : </td>
                    <td><input placeholder="PV1" id="temp" size="4" maxlength="4"> </td>
                </tr>
                <tr>
                    <td>Oil Temp : </td>
                    <td><input placeholder="SV1" id="otemp" size="4" maxlength="4"> </td>
                </tr>
                <tr>
                    <td>CP : </td>
                    <td><input placeholder="PV2" id="mv" size="4" maxlength="4"> </td>
                </tr>
                <tr>
                    <td>Monitor : </td>
                    <td>
                        <select id=monitor>
                            <option value="Monitor1">Monitor1</option>
                            <option value="Monitor2">Monitor2</option>
                            <option value="Monitor3">Monitor3</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Customer : </td>
                    <td> <input id="customer" size="10"></td>
                </tr>
                <tr>
                    <td>Material: </td>
                    <td> <input id="mat" size="10"></td>
                </tr>
                <tr>
                    <td>Part Name : </td>
                    <td> <input id="pn" size="10"></td>
                </tr>
                <tr>
                    <td>Part No : </td>
                    <td> <input id="pno" size="10"></td>
                </tr>
                <tr>
                    <td>Process : </td>
                    <td> <input id="ht" size="10"></td>
                </tr>
                <tr>
                    <td>Batch Qty : </td>
                    <td> <input id="bq" size="10"></td>
                </tr>
                <tr>
                    <td>Batch No : </td>
                    <td> <input id="bno" size="10"></td>
                </tr>
                <tr>
                    <td>Batch Date : </td>
                    <td> <input id="bt" size="10"></td>
                </tr>
                <tr>
                    <td>Furnace : </td>
                    <td> <input id="furn" size="10"></td>
                </tr>
                <tr>
                    <td>Loading Time : </td>
                    <td> <input id="lt" size="10"></td>
                </tr>
                <tr>
                    <td>Set Temp : </td>
                    <td> <input id="settemp" size="10"></td>
                </tr>
                <tr>
                    <td>Soaking Start : </td>
                    <td> <input id="st" size="10"></td>
                </tr>
                <tr>
                    <td>Soaking End : </td>
                    <td> <input id="se" size="10"></td>
                </tr>
                <tr>
                    <td>Total Soaking Time : </td>
                    <td> <input id="tst" size="10"></td>
                </tr>
                <tr>
                    <td>Unloading Time : </td>
                    <td> <input id="ut" size="10"></td>
                </tr>
                <tr>
                    <td><input type="button" id="Plot" value="Draw"></td>
                </tr>
                <tr>
                    <td><button id='save_btn'>Save Chart</button></td>
                </tr>

            </table>
        </form>
    </div>
</body>

</html>
