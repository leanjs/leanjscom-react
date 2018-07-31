import React from 'react'
import Bullet from './Bullet'

import { EXTRADARKGREY, WHITE } from '../../config/styles'

const images = {
  phone:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjIgKDU1MDQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5GaWxsIDE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkZvb3RlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ0LjAwMDAwMCwgLTIxMC4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NC4wMDAwMDAsIDIwOC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05LjQ0MjgzODgsNS4wOTMwODM4NSBDMTAuNzQ2NTY4MSw2LjI5NzY1NDQ4IDEwLjc0NjU2ODEsOC40MDQwMDc2NyA5LjQ0MjgzODgsOS43MDc1Njk5MSBMOC4xMzkxMDk1MSwxMS4wMTEyOTkyIEM5Ljk0NTI4MDU2LDEzLjIxODE0NzQgMTIuMzUzMDE4NiwxNS42MjU3ODUzIDE0LjU2MDAzMzksMTcuNDMyMjIzNiBMMTUuOTY0MjU4MiwxNi4xMjg0OTQzIEMxNy4xNjg4Mjg4LDE0LjgyNDc2NSAxOS4yNzUxODIsMTQuODI0NzY1IDIwLjU3ODc0NDMsMTYuMTI4NDk0MyBMMjIuNjg1MDk3NSwxOC4yMzQ4NDc1IEMyMy43ODkxNzMxLDE5LjQzOTQxODEgMjMuODg5NjY4MSwyMS4yNDQyODYyIDIyLjg4NjA3NDIsMjIuNTQ5MzE4NSBDMjIuMzg0OTM1NCwyMy4zNTE5MDg5IDIxLjQ4MTg0OTksMjMuOTUzNTQyOCAyMC44Nzg5MTMxLDI0LjY1NTY3MTYgQzE4Ljg3MTc1MTksMjYuNjYyODMyOCAxNC44NTg1NjU2LDI1LjE1NjgxMDQgMTAuOTQ2MzQyMSwyMi4yNDc4NjY4IEM4LjAzNzM5ODM4LDIwLjA0MTAxODUgNS41MjkwMzE2NCwxNy42MzMzODA3IDMuNDIxNTc1OTUsMTQuNzIzMTAwNyBDMC40MTIxMzcyMzIsMTAuNzA5OTgxMSAtMS4wOTI2ODIzNSw2Ljc5NzQyMzUgMC45MTMyNzYwMzEsNC43OTA1Mjk2NSBDMS42MTU0MDQ5LDQuMDg4NDAwNzkgMi4zMTc1MDAzNiwzLjI4NTgxMDI5IDMuMTIwMTI0MjYsMi42ODQxNzY0NiBDNC4zMjQ2OTQ4OCwxLjY4MDU5NTkgNi4yMzAwNTgwMSwxLjc4MTA5MDk0IDcuMzM0MDMzMzcsMi45ODU2NDE1MiBMOS40NDAzODY1Niw1LjA5MTk5NDcxIEw5LjQ0MjgzODgsNS4wOTMwODM4NSBaIE02LjMzMjkwNTA1LDEwLjkxMjMwNzYgTDguNTM5NzUzMjgsOC43MDU0NTkzNiBDOS4yNDE4ODIxNCw4LjAwMzMzMDQ5IDkuMjQxODgyMTQsNi43OTg3OTMyOCA4LjUzOTc1MzI4LDUuOTk2MTY5MzggTDYuNDMzNDAwMDksMy44ODk4MTYxOCBDNS43MzEyNzEyMiwzLjE4NzY4NzMyIDQuNjI3MjI5MDMsMy4xODc2ODczMiAzLjgyNDYwNTEzLDMuNzg5MzI3ODMgQzMuMjIyOTcxMyw0LjI5MDQ2NjYzIDIuNTIwODc1ODQsNS4wOTMwNTcxMiAxLjkxNzkzOTA1LDUuNjk1OTkzOTIgQzAuNTEzNzE0NzI1LDcuMTAwMjE4MjQgMS45MTc5MzkwNSwxMC40MTEwNDE4IDQuNDI2MjM4OTcsMTMuOTIzMDIyNSBDNi41MzI1OTIxNiwxNi42MzIzMTI1IDguOTQwNDk3MjcsMTkuMDM5OTgzOCAxMS43NTAyMTU1LDIxLjE0NjQzNzIgQzE1LjE2MTYzNDMsMjMuNzU1MjMyMSAxOC40NzI0OTEzLDI1LjE1OTU1NjcgMTkuODc2NjgyMiwyMy43NTUyMzIxIEMyMC40NzgzMTYxLDIzLjE1MzU5ODMgMjEuMjgwOTA2NiwyMi40NTE1MDI4IDIxLjg4Mzg0MzQsMjEuNzQ4MDcxIEMyMi40ODU0NzcyLDIwLjk0NTQ4MDUgMjIuMzg0OTgyMiwxOS44NDE0MDQ5IDIxLjY4Mjg2NjcsMTkuMTM5Mjc2MSBMMTkuNTc2NTEzNSwxNy4wMzI5MjI5IEMxOC44NzQzODQ2LDE2LjMzMDc5NCAxNy41NjkzNTIzLDE2LjMzMDc5NCAxNi44NjcyMjM1LDE3LjAzMjkyMjkgTDE0LjY2MDM3NTIsMTkuMjM5NzcxMSBDMTEuNzUxNDMxNiwxNi45MzI0NjEzIDguNjQwMDI3ODEsMTMuOTIzMDIyNSA2LjMzMjc4NDc4LDEwLjkxMjE4MDYgTDYuMzMyOTA1MDUsMTAuOTEyMzA3NiBaIiBpZD0iRmlsbC0xIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
  email:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMjEgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjIgKDU1MDQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5GaWxsIDE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkZvb3RlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ2LjAwMDAwMCwgLTI1OS4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ2LjAwMDAwMCwgMjUxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTAuOTMzMzMzMzMzLDggQzAuNDI4Mzc2NjY3LDggMCw4LjQyODM3NjY3IDAsOC45MzMzMzMzMyBMMCwyMS4wNjY2NjY3IEMwLDIxLjU3MTYyMzMgMC40MjgzNzY2NjcsMjIgMC45MzMzMzMzMzMsMjIgTDIwLjA2NjY2NjcsMjIgQzIwLjU3MTYyMzMsMjIgMjEsMjEuNTcxNjIzMyAyMSwyMS4wNjY2NjY3IEwyMSw4LjkzMzMzMzMzIEMyMSw4LjQyODM3NjY3IDIwLjU3MTYyMzMsOCAyMC4wNjY2NjY3LDggTDAuOTMzMzMzMzMzLDggWiBNMiw5IEwxOSw5IEwxMC41MDAxMjEyLDE2IEwyLDkgWiBNMSwxMCBMNiwxNC4xNTU1MDY4IEwxLDE5IEwxLDEwIFogTTIwLDEwIEwyMCwxOSBMMTUsMTQuMTU1NTA2OCBMMjAsMTAgWiBNNi45MzY1MTg2MywxNiBMOS41NTUyNzYxNSwxOC4yNjc0NDE5IEM5LjgxMTc3OTM5LDE4LjQ4NzI4MTQgMTAuMTg4NDUyNSwxOC40ODcyODE0IDEwLjQ0NDk1NTcsMTguMjY3NDQxOSBMMTMuMDYzNzEzMywxNiBMMTgsMjEgTDIsMjEgTDYuOTM2NTE4NjMsMTYgWiIgaWQ9IkZpbGwtMSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
  twitter:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMjEgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjIgKDU1MDQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5GaWxsIDE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkZvb3RlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ2LjAwMDAwMCwgLTI5OS4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ2LjAwMDAwMCwgMjk1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLjQzNDg1MzYsNi4wMDkyNTgxNiBDMjAuNTkwMzQxMyw1LjQ4MjI4MTc1IDIwLjQxMjUwNzksNC45MTE1MTk3NCAxOS45ODA1MDM2LDQuNTY4ODg2MTYgQzE5LjczNTY0MjcsNC4zNzMzNjIxNiAxOS40Mzg2MzAxLDQuMjc0NjYyMjMgMTkuMTM3ODc1Myw0LjI3NDY2MjIzIEMxOC45MDA0NTM0LDQuMjc0NjYyMjMgMTguNjYzMDI2OCw0LjMzNzA0NDE5IDE4LjQ0OTgxOTMsNC40NjM2Njk2NCBDMTguMDI2MTkzMSw0LjcxMjI3MjY1IDE3LjU4MzkyNzcsNC45MTE1MTI1OSAxNy4xMjExODc2LDUuMDUyMTE3NSBDMTYuMjM3NjEwMSw0LjM3NjE2OTk2IDE1LjE0MTczMDgsNCAxNC4wMTUxOTkzLDQgQzExLjQzMzM1MDksNCA5LjI5NDYwMjMxLDUuOTI1NDQ1ODEgOC45NTc1NzAwNCw4LjQxNTk4MDgxIEM2Ljg5ODk3OTgsNy45NzU1NzQ1IDUuMDIzNzc4OTcsNi44NDE1MzQ4IDMuNjcyNzg5NjQsNS4xODQxNDE2NyBDMy40MTU4MjA0MSw0Ljg2NjY1NDQxIDMuMDI5NDI1MDcsNC42ODUwNzY0OSAyLjYyNjI3MzQ2LDQuNjg1MDc2NDkgQzIuNTkyNzU2MTUsNC42ODUwNzY0OSAyLjU1NjQ0Mjk1LDQuNjg3ODY5OTkgMi41MjAxMzIxMyw0LjY4OTczMTUzIEMyLjA3Nzg2NjY2LDQuNzI0MTgwODEgMS42ODIxNzU1Miw0Ljk3MzcwNjI1IDEuNDU4NzE4ODMsNS4zNTYzODMyNyBDMS4wMDUyOTg0LDYuMTMzODIxODUgMC43NjYwMTUwMjUsNy4wMjAyMTE5NiAwLjc2NjAxNTAyNSw3LjkyNDE2ODczIEMwLjc2NjAxNTAyNSw4LjUzNDAyMDc2IDAuODc0MDE3ODk4LDkuMTI4MDQ2MDkgMS4wNzQyMDY0OSw5LjY4MjAyNzk5IEMwLjg1OTEzMDMyLDkuOTI2ODg4ODUgMC43MzM0MzIwNjEsMTAuMjQ0Mzk5OSAwLjczMzQzMjA2MSwxMC41ODA1MDI2IEMwLjczMzQzMjA2MSwxMS45MTkzODM2IDEuMjM5MDA0MywxMy4xNTAxOTQ5IDIuMDgwNjc5MjMsMTQuMDc0NzY5MyBDMi4wMjg1MzkzNCwxNC4zMDU2NzQ1IDIuMDM2OTE5ODYsMTQuNTQ5NjE3NyAyLjExMjMzNSwxNC43ODMzMjM2IEMyLjQwMzc3MDE5LDE1LjY5NTc2NTggMi45MzYzMjQwOCwxNi40ODA2NjQ5IDMuNjI2MjYyOTgsMTcuMDgwMjY3NyBDMy4xNzg0MjAwMywxNy4xODE3NTQgMi43MTU2Nzk5NywxNy4yMzM4OTM5IDIuMjQ1NDc5NDMsMTcuMjMzODkzOSBDMi4wMDE1NDgxNSwxNy4yMzM4OTM5IDEuNzU1NzMzODgsMTcuMjE4MDY3MiAxLjUwNzEzMDg3LDE3LjE5MDEzNDUgQzEuNDU0OTkwOTgsMTcuMTgzNjE3OSAxLjQwMTkxOTEyLDE3LjE3OTg5MjQgMS4zNDg4NDk2NSwxNy4xNzk4OTI0IEMwLjc4MzY4ODcyMSwxNy4xNzk4OTI0IDAuMjcxNjA5NDIyLDE3LjUzMzcwNDggMC4wNzk4MDYxMjExLDE4LjA3ODM2NzEgQy0wLjEzMzQwODUwMiwxOC42Njk2MDM3IDAuMDkxOTA5OTY1MywxOS4zMzA2NTQxIDAuNjIwNzUwMDY1LDE5LjY3MDQ5ODkgQzIuNTYxMDkzMjMsMjAuOTEzNDY2MyA0LjgwNDA5NzgxLDIxLjU3MDgyMjIgNy4xMDQ2ODg2NiwyMS41NzA4MjIyIEMxNC41NjczMDc3LDIxLjU3MDgyMjIgMTkuMDUyMTcyOCwxNS41NjQ1NDQ5IDE5LjEzMzIxMzEsOS43MDE1MTgxOCBDMTkuNzQwMjc2Myw5LjE4MzgzNzU3IDIwLjI3NDcxMzIsOC41ODg4ODI2NSAyMC43MjcyMDQxLDcuOTI0MTEzOTEgQzIwLjg5ODUyMDksNy42OTc4NjM3MiAyMSw3LjQxNzYxMjA5IDIxLDcuMTEwMzUwMjEgQzIwLjk5OTA2OCw2LjY1NjkyOTc4IDIwLjc3NjU0MzMsNi4yNTU2MzczMyAyMC40MzQ4MzkzLDYuMDA4ODkzNDggTDIwLjQzNDg1MzYsNi4wMDkyNTgxNiBaIE0xNy43NzEwMTE2LDkuMDUzMDM2MTUgQzE3Ljc3OTM5MjEsOS4yMTQxMTA4OCAxNy43ODMxMTUyLDkuMzc2MTI0NzMgMTcuNzgzMTE1Miw5LjUzODEzMzggQzE3Ljc4MzExNTIsMTQuNDk4MDM4IDE0LjAwNzU5MSwyMC4yMTY2MjIzIDcuMTA0NjI2NjksMjAuMjE2NjIyMyBDNC45ODU1MTg0MSwyMC4yMTY2MjIzIDMuMDEyNTY4NjksMTkuNTk1NTkxNSAxLjM1MDUyNzY2LDE4LjUzMDQ1OTkgQzEuNjQyODkyNDMsMTguNTYzMDQ3NiAxLjk0MjY5MzgzLDE4LjU4MzUzMTcgMi4yNDYyMTM1NiwxOC41ODM1MzE3IEM0LjAwNTAwMjQsMTguNTgzNTMxNyA1LjYyMjI1Njc1LDE3Ljk4Mjk5OTMgNi45MDgxNzU0OSwxNi45NzU1NzMyIEM1LjI2MzkxNTY1LDE2Ljk0NjcxMDkgMy44Nzk0MTM3OCwxNS44NjAxNDg5IDMuNDAwNzk5MzYsMTQuMzY5NDEyNyBDMy42Mjk4NDMwNSwxNC40MTMxNzIxIDMuODY1Mzk4NTgsMTQuNDM3MzgxNyA0LjEwNTYxMTU0LDE0LjQzNzM4MTcgQzQuNDQ5MTc0NywxNC40MzczODE3IDQuNzgwNjI5NDksMTQuMzkwODI4OCA1LjA5NDM5ODQzLDE0LjMwNTE2OTIgQzMuMzc3NTEyMTksMTMuOTU4ODE3MyAyLjA4MzI3NDksMTIuNDQzOTU5OCAyLjA4MzI3NDksMTAuNjIzNzk0OCBMMi4wODMyNzQ5LDEwLjU3NzI0MiBDMi41ODk3NzY3MiwxMC44NTc0OTgzIDMuMTY4OTA0OTUsMTEuMDI2MDE0NSAzLjc4MzQwNDg3LDExLjA0NTU1OTUgQzIuNzc2OTA4MjksMTAuMzcyNDAwNyAyLjExNDkyODI5LDkuMjIyNTM0MzEgMi4xMTQ5MjgyOSw3LjkyMDk3OTU2IEMyLjExNDkyODI5LDcuMjMzODUzMjMgMi4zMDAyMTAyMyw2LjU4OTU1OTA4IDIuNjIzMjg5MjcsNi4wMzU1NTMzNSBDNC40NzMzMTk5NCw4LjMwNjQyMTQ5IDcuMjM5NDg3MjcsOS43OTk4NzQ4OCAxMC4zNTg1ODUxLDkuOTU2MjM0OTcgQzEwLjI5MzQwOTYsOS42ODI1MDk0NyAxMC4yNjI2ODU4LDkuMzk0NzkyNiAxMC4yNjI2ODU4LDkuMTAwNTkyNSBDMTAuMjYyNjg1OCw3LjAyOTg5Mzg5IDExLjk0MjM0MTIsNS4zNDkzODA0NCAxNC4wMTM4OTc5LDUuMzQ5MzgwNDQgQzE1LjA5MzkyNjYsNS4zNDkzODA0NCAxNi4wNjk2OTk0LDUuODA0NjgzODYgMTYuNzU0MDEzMSw2LjUzMjc1OTM3IEMxNy42MDc3OTY0LDYuMzY1MTY4MDUgMTguNDEyMjQwNSw2LjA1MzI2MzA0IDE5LjEzNjYyMTUsNS42MjMxMDU5NCBDMTguODU1NDM1NSw2LjQ5OTI0NjgzIDE4LjI2MDQ4MDYsNy4yMzQ3ODI4MSAxNy40ODY3NjA0LDcuNjk4NDUyNDUgQzE4LjI0NTU4MzUsNy42MDkwNjk3OCAxOC45NjcxNTIsNy40MDcwMTcyNyAxOS42NDEyNjQyLDcuMTA3MjE1ODYgQzE5LjEzOTQxMDMsNy44NjMyNTAyNyAxOC41MDQ0MzU3LDguNTI0MzAwNjkgMTcuNzcwNzM1MSw5LjA1MzE2MDEgTDE3Ljc3MTAxMTYsOS4wNTMwMzYxNSBaIiBpZD0iRmlsbC0xIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
  instagram:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjEgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjIgKDU1MDQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5GaWxsIDE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkZvb3RlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ3LjAwMDAwMCwgLTMzOS4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Ny4wMDAwMDAsIDMzOC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01Ljk1OTQ1OTQ2LDEgQzIuNjcyNjc1NjgsMSAwLDMuNjcyNjc1NjggMCw2Ljk1OTQ1OTQ2IEwwLDE2LjA0MDU0MDUgQzAsMTkuMzI3MzI0MyAyLjY3MjY3NTY4LDIyIDUuOTU5NDU5NDYsMjIgTDE1LjA0MDU0MDUsMjIgQzE4LjMyNzMyNDMsMjIgMjEsMTkuMzI3MzI0MyAyMSwxNi4wNDA1NDA1IEwyMSw2Ljk1OTQ1OTQ2IEMyMSwzLjY3MjY3NTY4IDE4LjMyNzMyNDMsMSAxNS4wNDA1NDA1LDEgTDUuOTU5NDU5NDYsMSBaIE01Ljk1OTQ1OTQ2LDIuNzAyNzAyNyBMMTUuMDQwNTQwNSwyLjcwMjcwMjcgQzE3LjQxMzkwOTUsMi43MDI3MDI3IDE5LjI5NzI5NzMsNC41ODYwOTA1NCAxOS4yOTcyOTczLDYuOTU5NDU5NDYgTDE5LjI5NzI5NzMsMTYuMDQwNTQwNSBDMTkuMjk3Mjk3MywxOC40MTM5MDk1IDE3LjQxMzkwOTUsMjAuMjk3Mjk3MyAxNS4wNDA1NDA1LDIwLjI5NzI5NzMgTDUuOTU5NDU5NDYsMjAuMjk3Mjk3MyBDMy41ODYwOTA1NCwyMC4yOTcyOTczIDEuNzAyNzAyNywxOC40MTM5MDk1IDEuNzAyNzAyNywxNi4wNDA1NDA1IEwxLjcwMjcwMjcsNi45NTk0NTk0NiBDMS43MDI3MDI3LDQuNTg2MDkwNTQgMy41ODYwOTA1NCwyLjcwMjcwMjcgNS45NTk0NTk0NiwyLjcwMjcwMjcgWiBNMTYuMTc1Njc1Nyw0LjQwNTQwNTQxIEMxNS41NDgyNTgxLDQuNDA1NDA1NDEgMTUuMDQwNTQwNSw0LjkxMzEyMjk3IDE1LjA0MDU0MDUsNS41NDA1NDA1NCBDMTUuMDQwNTQwNSw2LjE2Nzk1ODExIDE1LjU0ODI1ODEsNi42NzU2NzU2OCAxNi4xNzU2NzU3LDYuNjc1Njc1NjggQzE2LjgwMzA5MzIsNi42NzU2NzU2OCAxNy4zMTA4MTA4LDYuMTY3OTU4MTEgMTcuMzEwODEwOCw1LjU0MDU0MDU0IEMxNy4zMTA4MTA4LDQuOTEzMTIyOTcgMTYuODAzMDkzMiw0LjQwNTQwNTQxIDE2LjE3NTY3NTcsNC40MDU0MDU0MSBaIE0xMC41LDYuMTA4MTA4MTEgQzcuNTMyNDcyOTcsNi4xMDgxMDgxMSA1LjEwODEwODExLDguNTMyNDcyOTcgNS4xMDgxMDgxMSwxMS41IEM1LjEwODEwODExLDE0LjQ2NzUyNyA3LjUzMjQ3Mjk3LDE2Ljg5MTg5MTkgMTAuNSwxNi44OTE4OTE5IEMxMy40Njc1MjcsMTYuODkxODkxOSAxNS44OTE4OTE5LDE0LjQ2NzUyNyAxNS44OTE4OTE5LDExLjUgQzE1Ljg5MTg5MTksOC41MzI0NzI5NyAxMy40Njc1MjcsNi4xMDgxMDgxMSAxMC41LDYuMTA4MTA4MTEgWiBNMTAuNSw3LjgxMDgxMDgxIEMxMi41NDc0NDMyLDcuODEwODEwODEgMTQuMTg5MTg5Miw5LjQ1MjU1Njc2IDE0LjE4OTE4OTIsMTEuNSBDMTQuMTg5MTg5MiwxMy41NDc0NDMyIDEyLjU0NzQ0MzIsMTUuMTg5MTg5MiAxMC41LDE1LjE4OTE4OTIgQzguNDUyNTU2NzYsMTUuMTg5MTg5MiA2LjgxMDgxMDgxLDEzLjU0NzQ0MzIgNi44MTA4MTA4MSwxMS41IEM2LjgxMDgxMDgxLDkuNDUyNTU2NzYgOC40NTI1NTY3Niw3LjgxMDgxMDgxIDEwLjUsNy44MTA4MTA4MSBaIiBpZD0iRmlsbC0xIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
  hangouts:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIyNXB4IiB2aWV3Qm94PSIwIDAgMjEgMjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjIgKDU1MDQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5GaWxsIDE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkZvb3RlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ2LjAwMDAwMCwgLTM4Mi4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ2LjAwMDAwMCwgMzgyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLjQ5OTQwNywwIEM0LjY5MzgxMDcxLDAgMCw0LjY5NDk5NjYxIDAsMTAuNTAwNTkzIEMwLDE2LjMwNjE4OTMgNC42OTM4MTA3MSwyMS4wMDExODU5IDEwLjUwMDU5MywyMS4wMDExODU5IEwxMS4xMTc4NTYzLDIxLjAwMTE4NTkgTDExLjExNzg1NjMsMjQuNzA3MTM3NCBDMTEuMTE3ODU2MywyNC43MDcxMzc0IDIxLDE5Ljc2NTQ3MzIgMjEsMTAuNTAwNTkzIEMyMSw0LjY5NDk5NjYxIDE2LjMwNjE4OTMsMCAxMC40OTk0MDcsMCBaIE05Ljg4MjE0MzY2LDExLjExNzg1NjMgQzkuODgyMTQzNjYsMTIuMjI5NjQyIDguNjQ2NDMwOTksMTMuNTg4MDk1OCA4LjY0NjQzMDk5LDEzLjU4ODA5NTggTDcuNTM0NjQ1MzYsMTMuNTg4MDk1OCBDNy41MzQ2NDUzNiwxMy41ODgwOTU4IDguNzcwMzU4MDMsMTIuNjAwMjM3MiA4Ljc3MDM1ODAzLDExLjExNzg1NjMgTDYuMTc2MTkxNTUsMTEuMTE3ODU2MyBMNi4xNzYxOTE1NSw3LjQxMTkwNDIyIEw5Ljg4MjE0MzY2LDcuNDExOTA0MjIgTDkuODgyMTQzNjYsMTEuMTE3ODU2MyBaIE0xNC44MjM4MDg0LDExLjExNzg1NjMgQzE0LjgyMzgwODQsMTIuMjI5NjQyIDEzLjU4ODA5NTgsMTMuNTg4MDk1OCAxMy41ODgwOTU4LDEzLjU4ODA5NTggTDEyLjQ3NjMxMDEsMTMuNTg4MDk1OCBDMTIuNDc2MzEwMSwxMy41ODgwOTU4IDEzLjcxMjAyMjgsMTIuNjAwMjM3MiAxMy43MTIwMjI4LDExLjExNzg1NjMgTDExLjExNzg1NjMsMTEuMTE3ODU2MyBMMTEuMTE3ODU2Myw3LjQxMTkwNDIyIEwxNC44MjM4MDg0LDcuNDExOTA0MjIgTDE0LjgyMzgwODQsMTEuMTE3ODU2MyBaIiBpZD0iRmlsbC0xIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
  office:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjEgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjIgKDU1MDQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iRm9vdGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDYuMDAwMDAwLCAtNDQ3LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ2LjAwMDAwMCwgNDQ3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTYuNjI1MjgsMjEgTDMuNTAwMjgsMjEgTDMuNTAwMjgsMCBMMTYuNjI1MjgsMCBMMTYuNjI1MjgsMjEgWiBNNC4zNzQ3MiwyMC4xMjQ3MiBMMTUuNzUsMjAuMTI0NzIgTDE1Ljc1LDAuODc1MjggTDQuMzc0NzIsMC44NzUyOCBMNC4zNzQ3MiwyMC4xMjQ3MiBaIiBpZD0iRmlsbC0xIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMiIgcG9pbnRzPSIwIDIxIDIxIDIxIDIxIDIwLjEyNDcyIDAgMjAuMTI0NzIiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEuMzc1MjgsMjEgTDguNzUwMjgsMjEgTDguNzUwMjgsMTUuNzUgTDExLjM3NTI4LDE1Ljc1IEwxMS4zNzUyOCwyMSBaIE05LjYyNDc0MSwyMC4xMjQ3MiBMMTAuNTAwMDIxLDIwLjEyNDcyIEwxMC41MDAwMjEsMTYuNjI0NDQgTDkuNjI0NzQxLDE2LjYyNDQ0IEw5LjYyNDc0MSwyMC4xMjQ3MiBaIiBpZD0iRmlsbC0zIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuODc1LDQuMzc0NzIgTDUuMjUsNC4zNzQ3MiBMNS4yNSwxLjc0OTcyIEw3Ljg3NSwxLjc0OTcyIEw3Ljg3NSw0LjM3NDcyIFogTTYuMTI1MjgsMy41MDAyNTkgTDcuMDAwNTYsMy41MDAyNTkgTDYuOTk5NzM4OSwyLjYyNDk3OSBMNi4xMjQ0NTg5LDIuNjI0OTc5IEw2LjEyNTI4LDMuNTAwMjU5IFoiIGlkPSJGaWxsLTQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEuMzc1MjgsNC4zNzQ3MiBMOC43NTAyOCw0LjM3NDcyIEw4Ljc1MDI4LDEuNzQ5NzIgTDExLjM3NTI4LDEuNzQ5NzIgTDExLjM3NTI4LDQuMzc0NzIgWiBNOS42MjQ3NDEsMy41MDAyNTkgTDEwLjUwMDAyMSwzLjUwMDI1OSBMMTAuNTAwMDIxLDIuNjI0OTc5IEw5LjYyNDc0MSwyLjYyNDk3OSBMOS42MjQ3NDEsMy41MDAyNTkgWiIgaWQ9IkZpbGwtNSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNC44NzQ3Miw0LjM3NDcyIEwxMi4yNDk3Miw0LjM3NDcyIEwxMi4yNDk3MiwxLjc0OTcyIEwxNC44NzQ3MiwxLjc0OTcyIEwxNC44NzQ3Miw0LjM3NDcyIFogTTEzLjEyNSwzLjUwMDI1OSBMMTQuMDAwMjgsMy41MDAyNTkgTDE0LjAwMDI4LDIuNjI0OTc5IEwxMy4xMjUsMi42MjQ5NzkgTDEzLjEyNSwzLjUwMDI1OSBaIiBpZD0iRmlsbC02Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuODc1LDcuODc1IEw1LjI1LDcuODc1IEw1LjI1LDUuMjUgTDcuODc1LDUuMjUgTDcuODc1LDcuODc1IFogTTYuMTI1MjgsNi45OTk3MiBMNy4wMDA1Niw2Ljk5OTcyIEw3LjAwMDU2LDYuMTI0NDQgTDYuMTI1MjgsNi4xMjQ0NCBMNi4xMjUyOCw2Ljk5OTcyIFoiIGlkPSJGaWxsLTciPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEuMzc1MjgsNy44NzUgTDguNzUwMjgsNy44NzUgTDguNzUwMjgsNS4yNSBMMTEuMzc1MjgsNS4yNSBMMTEuMzc1MjgsNy44NzUgWiBNOS42MjQ3NDEsNi45OTk3MiBMMTAuNTAwMDIxLDYuOTk5NzIgTDEwLjUwMDAyMSw2LjEyNDQ0IEw5LjYyNDc0MSw2LjEyNDQ0IEw5LjYyNDc0MSw2Ljk5OTcyIFoiIGlkPSJGaWxsLTgiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQuODc0NzIsNy44NzUgTDEyLjI0OTcyLDcuODc1IEwxMi4yNDk3Miw1LjI1IEwxNC44NzQ3Miw1LjI1IEwxNC44NzQ3Miw3Ljg3NSBaIE0xMy4xMjUsNi45OTk3MiBMMTQuMDAwMjgsNi45OTk3MiBMMTQuMDAwMjgsNi4xMjQ0NCBMMTMuMTI1LDYuMTI0NDQgTDEzLjEyNSw2Ljk5OTcyIFoiIGlkPSJGaWxsLTkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNy44NzUsMTEuMzc1MjggTDUuMjUsMTEuMzc1MjggTDUuMjUsOC43NTAyOCBMNy44NzUsOC43NTAyOCBMNy44NzUsMTEuMzc1MjggWiBNNi4xMjUyOCwxMC41IEw3LjAwMDU2LDEwLjUgTDcuMDAwNTYsOS42MjQ3MiBMNi4xMjUyOCw5LjYyNDcyIEw2LjEyNTI4LDEwLjUgWiIgaWQ9IkZpbGwtMTAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEuMzc1MjgsMTEuMzc1MjggTDguNzUwMjgsMTEuMzc1MjggTDguNzUwMjgsOC43NTAyOCBMMTEuMzc1MjgsOC43NTAyOCBMMTEuMzc1MjgsMTEuMzc1MjggWiBNOS42MjQ3NDEsMTAuNSBMMTAuNTAwMDIxLDEwLjUgTDEwLjUwMDAyMSw5LjYyNDcyIEw5LjYyNDc0MSw5LjYyNDcyIEw5LjYyNDc0MSwxMC41IFoiIGlkPSJGaWxsLTExIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0Ljg3NDcyLDExLjM3NTI4IEwxMi4yNDk3MiwxMS4zNzUyOCBMMTIuMjQ5NzIsOC43NTAyOCBMMTQuODc0NzIsOC43NTAyOCBMMTQuODc0NzIsMTEuMzc1MjggWiBNMTMuMTI1LDEwLjUgTDE0LjAwMDI4LDEwLjUgTDE0LjAwMDI4LDkuNjI0NzIgTDEzLjEyNSw5LjYyNDcyIEwxMy4xMjUsMTAuNSBaIiBpZD0iRmlsbC0xMiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03Ljg3NSwxNC44NzQ3MiBMNS4yNSwxNC44NzQ3MiBMNS4yNSwxMi4yNDk3MiBMNy44NzUsMTIuMjQ5NzIgTDcuODc1LDE0Ljg3NDcyIFogTTYuMTI1MjgsMTQuMDAwMjU5IEw3LjAwMDU2LDE0LjAwMDI1OSBMNy4wMDA1NiwxMy4xMjQ5NzkgTDYuMTI1MjgsMTMuMTI0OTc5IEw2LjEyNTI4LDE0LjAwMDI1OSBaIiBpZD0iRmlsbC0xMyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMS4zNzUyOCwxNC44NzQ3MiBMOC43NTAyOCwxNC44NzQ3MiBMOC43NTAyOCwxMi4yNDk3MiBMMTEuMzc1MjgsMTIuMjQ5NzIgTDExLjM3NTI4LDE0Ljg3NDcyIFogTTkuNjI0NzQxLDE0LjAwMDI1OSBMMTAuNTAwMDIxLDE0LjAwMDI1OSBMMTAuNTAwMDIxLDEzLjEyNDk3OSBMOS42MjQ3NDEsMTMuMTI0OTc5IEw5LjYyNDc0MSwxNC4wMDAyNTkgWiIgaWQ9IkZpbGwtMTQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQuODc0NzIsMTQuODc0NzIgTDEyLjI0OTcyLDE0Ljg3NDcyIEwxMi4yNDk3MiwxMi4yNDk3MiBMMTQuODc0NzIsMTIuMjQ5NzIgTDE0Ljg3NDcyLDE0Ljg3NDcyIFogTTEzLjEyNSwxNC4wMDAyNTkgTDE0LjAwMDI4LDE0LjAwMDI1OSBMMTQuMDAwMjgsMTMuMTI0OTc5IEwxMy4xMjUsMTMuMTI0OTc5IEwxMy4xMjUsMTQuMDAwMjU5IFoiIGlkPSJGaWxsLTE1Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuODc1LDE4LjM3NSBMNS4yNSwxOC4zNzUgTDUuMjUsMTUuNzUgTDcuODc1LDE1Ljc1IEw3Ljg3NSwxOC4zNzUgWiBNNi4xMjUyOCwxNy40OTk3MiBMNy4wMDA1NiwxNy40OTk3MiBMNy4wMDA1NiwxNi42MjQ0NCBMNi4xMjUyOCwxNi42MjQ0NCBMNi4xMjUyOCwxNy40OTk3MiBaIiBpZD0iRmlsbC0xNiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNC44NzQ3MiwxOC4zNzUgTDEyLjI0OTcyLDE4LjM3NSBMMTIuMjQ5NzIsMTUuNzUgTDE0Ljg3NDcyLDE1Ljc1IEwxNC44NzQ3MiwxOC4zNzUgWiBNMTMuMTI1LDE3LjQ5OTcyIEwxNC4wMDAyOCwxNy40OTk3MiBMMTQuMDAwMjgsMTYuNjI0NDQgTDEzLjEyNSwxNi42MjQ0NCBMMTMuMTI1LDE3LjQ5OTcyIFoiIGlkPSJGaWxsLTE3Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
}

const ContactUsBullet = ({ image }) => (
  <Bullet
    color={WHITE}
    bg={EXTRADARKGREY}
    size={40}
    images={images}
    image={image}
    hasBorder={false}
  />
)

export default ContactUsBullet
