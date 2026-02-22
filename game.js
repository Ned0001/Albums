const ALBUMS = [
  { name: "Kind of Blue", artist: "Miles Davis", year: 1959, cover: "https://i.discogs.com/dc6vUf2t2zFHMdwvlfI9Pr1dVBUGBrEp4QCKboA-URk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYyNzYx/ODMtMTQxNTM4NjM4/Ni04Nzc5LmpwZWc.jpeg" },
  { name: "A Love Supreme", artist: "John Coltrane", year: 1965, cover: "https://i.discogs.com/fGpBfJZOBOXcombzBDMfneERKusKwmEO03qCaTid4sY/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY4OTA3/NDctMTQyODg4ODc4/NC00ODEzLmpwZWc.jpeg" },
  { name: "Pet Sounds", artist: "The Beach Boys", year: 1966, cover: "https://i.discogs.com/yHDkZ0vAaV15mObTKnLtK1QZM8Hnp6EGrMUhKHS3PpE/rs:fit/g:sm/q:90/h:598/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNTQ0/NzktMTM0NjM4NzAy/Ny00Nzc0LmpwZWc.jpeg" },
  { name: "Sgt. Pepper's Lonely Hearts Club Band", artist: "The Beatles", year: 1967, cover: "https://i.discogs.com/JNbAKGFjLM_LrPZVRlNtWlYTgpUwXTZcqbC5okuCP-M/rs:fit/g:sm/q:90/h:590/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5OTQ5/Ny0xNDU2MDQ3Mzgz/LTk0ODkuanBlZw.jpeg" },
  { name: "Led Zeppelin IV", artist: "Led Zeppelin", year: 1971, cover: "https://i.discogs.com/kYC1B_ZCKOIsfJEx-W_woHYpJqgbYjhGe_rP_EFwZ6c/rs:fit/g:sm/q:90/h:183/w:200/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4ODI0/MzEtMTQyMDI3NTQz/Mi04MjQ0LmpwZWc.jpeg" },
  { name: "What's Going On", artist: "Marvin Gaye", year: 1971, cover: "https://i.discogs.com/ywu8mUs3NJhauOHQZBerCMDaFR3q5s2YDHmFzoKeLPA/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2MTk3/ODI2LTE2NzcxNTQ1/MTctMjE2Ny5qcGVn.jpeg" },
  { name: "The Rise and Fall of Ziggy Stardust", artist: "David Bowie", year: 1972, cover: "https://i.discogs.com/rEf92zTGb7rQSHs7kc4a_xuABzRD_-RyezJCnjEMP0w/rs:fit/g:sm/q:90/h:609/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYxODk1/Mi0xNzcwMTMyMTkw/LTgyMTMuanBlZw.jpeg" },
  { name: "Rumours", artist: "Fleetwood Mac", year: 1977, cover: "https://i.discogs.com/X2kgbJ7rhk0HNH39Nep8tTD_Fly6pmHk2KR_Lptjk88/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUyNjM1/MS0xMjkyMjkzNjg1/LmpwZWc.jpeg" },
  { name: "Never Mind the Bollocks", artist: "Sex Pistols", year: 1977, cover: "https://i.discogs.com/oQf8bet4UnWMaQp6xD-ASCviAi0-2x0sw0asqUe_gPA/rs:fit/g:sm/q:90/h:566/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1NTg0/MjUtMTM3NzEwNjMz/Ni00NDE5LmpwZWc.jpeg" },
  { name: "Unknown Pleasures", artist: "Joy Division", year: 1979, cover: "https://i.discogs.com/nigdVdUz5433GIo5-wLxHaJHL0bASlDWJtUB09m7Wjc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNDAw/LTE0ODIyMjk4MTIt/NDk5MC5qcGVn.jpeg" },
  { name: "London Calling", artist: "The Clash", year: 1979, cover: "https://i.discogs.com/vKxXel-d8v2rK-XYAVEaEi6d-2SgwXHxsVF8D17_-lI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ3MDkx/Mi0xNjA3NzYxMTgy/LTU4MjQuanBlZw.jpeg" },
  { name: "Thriller", artist: "Michael Jackson", year: 1982, cover: "https://i.discogs.com/OQRwID3TvI5bMrPxrDgtFRftYhjZlkQ1FPE81xPOY5I/rs:fit/g:sm/q:90/h:602/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5MTEy/OTMtMTU5NDI0NTgx/Mi03OTMxLmpwZWc.jpeg" },
  { name: "Purple Rain", artist: "Prince", year: 1984, cover: "https://i.discogs.com/mSIjl1G4gAdx2xw9iLG1fBmNPLz_5GNo0bLqeWyDMh4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5NDAy/MS0xMzM1NDAwMjg5/LmpwZWc.jpeg" },
  { name: "Licensed to Ill", artist: "Beastie Boys", year: 1986, cover: "https://i.discogs.com/GHkKqkrhZR6uENiPu6d2dw1rgzv3aLCfmks_L0VO23I/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU1MzE3/NTUtMTM5NTkyMDkw/Ni03MjkyLmpwZWc.jpeg" },
  { name: "The Joshua Tree", artist: "U2", year: 1987, cover: "https://i.discogs.com/rruNzVDMVrqdeTtLjTkYCMlKGNijZCLNlUzr28B3kCc/rs:fit/g:sm/q:90/h:640/w:406/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYwMTk3/MDctMTQwODk3OTcz/MS0zODY0LmpwZWc.jpeg" },
  { name: "Straight Outta Compton", artist: "N.W.A", year: 1988, cover: "https://i.discogs.com/ZgTTXLi35oQJzIdZyLtgbW9nOHpwsAOv9GytSSR9gM4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMzY0/OC0xNjQyNDEyODMy/LTU0ODAuanBlZw.jpeg" },
  { name: "Disintegration", artist: "The Cure", year: 1989, cover: "https://i.discogs.com/1jYALr8Hr8_7NT7WfoqvJ3budKuuhX_NxhcU89TaZiM/rs:fit/g:sm/q:90/h:595/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2NDU4/My0xMTcyNDI2MTgx/LmpwZWc.jpeg" },
  { name: "Nevermind", artist: "Nirvana", year: 1991, cover: "https://i.discogs.com/ucACtgPynRe-8CwyBy_Y-bdpRPeu0A3XvCoN-hTgM7Q/rs:fit/g:sm/q:90/h:605/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4MTMw/MDYtMTQzNjgxNDc2/Mi05NjgxLmpwZWc.jpeg" },
  { name: "The Low End Theory", artist: "A Tribe Called Quest", year: 1991, cover: "https://i.discogs.com/W1ZNmsNGf1q0PJel3zSH9eO75cQkE_tjD91drIK5U94/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg3Mjkx/LTE1NTAwOTY4MDkt/ODQwOS5qcGVn.jpeg" },
  { name: "Automatic for the People", artist: "R.E.M.", year: 1992, cover: "https://i.discogs.com/zss3qpeEd2aoOcQzvdwCCEhSmdJek96ABt6CjfO0Qmk/rs:fit/g:sm/q:90/h:590/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMzkw/NzEtMTI0MzYyMjA4/Mi5qcGVn.jpeg" },
  { name: "Enter the Wu-Tang", artist: "Wu-Tang Clan", year: 1993, cover: "https://i.discogs.com/JVtYto3PpCrhttx7V3aR09GKcOlPw4SE8RYrdxaWPTk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1Mzc0/OS0xMTg1MTM0MTM1/LmpwZWc.jpeg" },
  { name: "Illmatic", artist: "Nas", year: 1994, cover: "https://i.discogs.com/wrbuutLseZDQSdcRIKF9dK1k-K00qs08bHHqr-bZ0p8/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM5MjYw/NC0xNjk2MDg5NjAw/LTY2MTcuanBlZw.jpeg" },
  { name: "OK Computer", artist: "Radiohead", year: 1997, cover: "https://i.discogs.com/F_KSyKjGi2YN5SBttMhdgP2zyNdmHv7HHWvDVGj3Shg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTA3/OTgtMTM4ODYyMzYx/MS0yMzYyLmpwZWc.jpeg" },
  { name: "Homogenic", artist: "Bjork", year: 1997, cover: "https://i.discogs.com/YVv3s6E-kEiENrgPtWigsvR9W2puxXdCtCS1B-oyanU/rs:fit/g:sm/q:90/h:590/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwODI4/Ni0xNTEzNDEwODcy/LTI0NjcuanBlZw.jpeg" },
  { name: "Stankonia", artist: "OutKast", year: 2000, cover: "https://i.discogs.com/_GkMRVfsi2mro_K63aJ-0anZ4oBg4FqMpNk9sS8DV_o/rs:fit/g:sm/q:90/h:602/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNTE4/MS0xNjU2MzY4NDE3/LTI3MjMuanBlZw.jpeg" },
  { name: "Kid A", artist: "Radiohead", year: 2000, cover: "https://i.discogs.com/_zg0Us0N_anqCz9hJvFGeRK2v69eDDCxQnHkd7RcgTk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc0NzQz/LTE1NDg5MDI2NDMt/Mzg2OS5qcGVn.jpeg" },
  { name: "Is This It", artist: "The Strokes", year: 2001, cover: "https://i.discogs.com/UMLNSgraQ68YSUb0-5DF1P19vUxPZ36TWNL9ALRlG1Q/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMTAz/NzQtMTQ1Njk0MTMz/My0zMDY2LmpwZWc.jpeg" },
  { name: "The College Dropout", artist: "Kanye West", year: 2004, cover: "https://i.discogs.com/bbYRxCngKfYkzKx5TUuYKGod4DpYv535H363fx8qaKE/rs:fit/g:sm/q:90/h:584/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzMzQ0/NS0xNDg5ODEwNDA0/LTk3MDEuanBlZw.jpeg" },
  { name: "Back to Black", artist: "Amy Winehouse", year: 2006, cover: "https://i.discogs.com/syRCX8NaLwK2SMk8X6TVU_DWc8RRqE4b-tebAQ6kVH4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgyNTQz/OC0xNjE3ODE0NDI2/LTU1MjUuanBlZw.jpeg" },
  { name: "In Rainbows", artist: "Radiohead", year: 2007, cover: "https://i.discogs.com/7y0jjFTZp88uBO380fsYcO36I3ex_er3lZn8COq90Vc/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNzQy/OTYtMTY5NzMyNzQ3/Ny0yMzQ1LmpwZWc.jpeg" },
  { name: "My Beautiful Dark Twisted Fantasy", artist: "Kanye West", year: 2010, cover: "https://i.discogs.com/3RRJgAX-aSq0JB4tAZBpdWQezFQPiDauBE9eV0uhEAM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1NTkx/NTItMTczMTcxMzky/OC01OTQ0LmpwZWc.jpeg" },
  { name: "good kid, m.A.A.d city", artist: "Kendrick Lamar", year: 2012, cover: "https://i.discogs.com/HdsntvQX4LJibo7bIdG4SU-V9224aVcbzVcWROFlglE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0MTEw/MTM1LTE2NTk3MTM5/NDQtODY4Ny5qcGVn.jpeg" },
  { name: "Random Access Memories", artist: "Daft Punk", year: 2013, cover: "https://i.discogs.com/IR6_z_1KUErO-OORqXG2_MJhqWxsaPxYRi-hOLLdHic/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1NzAz/NjYtMTc0OTM3MjMx/Ny0xODg1LmpwZWc.jpeg" },
  { name: "To Pimp a Butterfly", artist: "Kendrick Lamar", year: 2015, cover: "https://i.discogs.com/8ZD7MZypmyxuliTV-Czyy03rA9ou2E-BL2rhIFTLUlk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY3ODEy/ODYtMTU4NjA5MTU4/OC04ODQ5LmpwZWc.jpeg" },
  { name: "Blonde", artist: "Frank Ocean", year: 2016, cover: "https://i.discogs.com/sH-YzOU7BthEIPqaAI--Leza_7CRv6UiWWezvIaTN88/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg5MzI1/MTQtMTQ3MTczNzEx/OS01MTU1LmpwZWc.jpeg" },
  { name: "DAMN.", artist: "Kendrick Lamar", year: 2017, cover: "https://i.discogs.com/n9BtVuF-dJtmghgg5MhBtN_nME-Wqb4SboSfeBxnWVE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMTMz/NTM4LTE0OTIyMDQ5/NjMtMzE5Ni5qcGVn.jpeg" },
  { name: "Ellington at Newport", artist: "Duke Ellington", year: 1956, cover: "https://i.discogs.com/xJ-NbOniX11nFuaZWa7X4s99FzV-qWrCXTY7h-MOeKM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0OTM1/MDA3LTE1ODQzNTMw/MDgtMzQ2Ni5qcGVn.jpeg" },
  { name: "Moanin'", artist: "Art Blakey", year: 1958, cover: "https://i.discogs.com/YyhQF7q8v9Fd5g108OTKRDBazdJQTF5KfGa7fukaSs0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1Nzk0/NS0xNjM4MDE0MjMx/LTMxNDIuanBlZw.jpeg" },
  { name: "Time Out", artist: "Dave Brubeck Quartet", year: 1959, cover: "https://i.discogs.com/8eKZWSXmCxdUd5ZAV9gy_W5S4nsjnOfE15EfMWYcI1c/rs:fit/g:sm/q:90/h:608/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMzg0/NTAyLTE1NjQ4NDQ1/MTMtMTEwNi5qcGVn.jpeg" },
  { name: "The Shape of Jazz to Come", artist: "Ornette Coleman", year: 1959, cover: "https://i.discogs.com/nWvgmgA6MrC7QW4YBDYmzA_cHMWi4-yrF6fVvdEWN-I/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ4ODk3/My0xNTM3Njg0MTAz/LTk0NjguanBlZw.jpeg" },
  { name: "Mingus Ah Um", artist: "Charles Mingus", year: 1959, cover: "https://i.discogs.com/GsTjRis5h8jKE280mEK71gSIowywxLfYd07nPmT72xU/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNTU3/NDItMTQzNDM0MDE4/OS0zNDc0LmpwZWc.jpeg" },
  { name: "My Favorite Things", artist: "John Coltrane", year: 1961, cover: "https://i.discogs.com/Jqft3ob5f38_4WuaYTC-SLgFUcHX-917pdqcOVpkslQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMDQw/ODIxLTE1NDgzNDcx/ODgtNzU3OC5qcGVn.jpeg" },
  { name: "Blue Break Beats", artist: "Various Artists", year: 1962, cover: "https://i.discogs.com/3rmp6MhthwX4trnB0u0fRKiqRvli4CD5weAafcOj6Yo/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NzAx/MDM2LTE1Nzk5MjI2/MTEtNjU0MS5qcGVn.jpeg" },
  { name: "Please Please Me", artist: "The Beatles", year: 1963, cover: "https://i.discogs.com/MF4VPxdWlRNzNXMy6YH4AXIqPr2ZycLQMCgNb1ND8fE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNTA0/NjgtMTM3NzU3NTU2/Mi0xNzE1LmpwZWc.jpeg" },
  { name: "A Hard Day's Night", artist: "The Beatles", year: 1964, cover: "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg" },
  { name: "Highway 61 Revisited", artist: "Bob Dylan", year: 1965, cover: "https://i.discogs.com/SFuuIpiD9lB8uQV2Fiw83xjct3qM0x1PiG3-NNtnC48/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY1OTAw/MDQtMTQyMjY0ODIx/Mi05NjIzLmpwZWc.jpeg" },
  { name: "Rubber Soul", artist: "The Beatles", year: 1965, cover: "https://i.discogs.com/G-kfVbRliTrlf2JEcEfQAxp7e9LJkztWXi8VuBlk2W0/rs:fit/g:sm/q:90/h:604/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU1MDE2/OTUtMTU4NjA4MDcz/MS00OTQyLmpwZWc.jpeg" },
  { name: "Bringing It All Back Home", artist: "Bob Dylan", year: 1965, cover: "https://i.discogs.com/1PZjyWQWhcQ7Zw9iyo01J_iQFyqd-PyCwABti95GvsU/rs:fit/g:sm/q:90/h:564/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNjI5/MTUtMTM0Mzg0NTI3/MS05NTc4LmpwZWc.jpeg" },
  { name: "Revolver", artist: "The Beatles", year: 1966, cover: "https://i.discogs.com/hHyc-UxILlfLM31ocujnICK2mrU5aIw8pAZ4h3xYxpo/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzMTgw/NDUtMTI3NjU5Mjg2/MS5qcGVn.jpeg" },
  { name: "Blonde on Blonde", artist: "Bob Dylan", year: 1966, cover: "https://i.discogs.com/94etNC31PRI2Y48s2soarp3Kjclut__0hGwJtd1F1CA/rs:fit/g:sm/q:90/h:602/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MzE2/MDEtMTM4NzE0MTM4/MC04MDg1LmpwZWc.jpeg" },
  { name: "Are You Experienced", artist: "Jimi Hendrix", year: 1967, cover: "https://i.discogs.com/2-7PGO_kBzci2lp_uafKMXvnH7gbXI0F9knTOUBtay4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk5MzAy/OC0xNTc2MzMzMjAx/LTg1MzAuanBlZw.jpeg" },
  { name: "The Velvet Underground & Nico", artist: "The Velvet Underground", year: 1967, cover: "https://i.discogs.com/Yh1cs99h4P29lRCaXXfbWb7APlDM9ODuwphDfby_2T8/rs:fit/g:sm/q:90/h:587/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUwMzQw/NDUtMTQ1NDU5Mzc2/OC04ODU2LmpwZWc.jpeg" },
  { name: "The Doors", artist: "The Doors", year: 1967, cover: "https://i.discogs.com/f31e2UCcsm9atjquzCFgm1AVBQjJ6mVrD7fr40s_T-Q/rs:fit/g:sm/q:90/h:590/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODIx/NjYyLTE2MjM3NTkz/NzEtODU1Ny5qcGVn.jpeg" },
  { name: "Disraeli Gears", artist: "Cream", year: 1967, cover: "https://i.discogs.com/3i9yh27yZwwWj4xXgWO7ETHh8u4wbDYvQEBBl9-32Ec/rs:fit/g:sm/q:90/h:619/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNTg2/NTktMTQ5NjA1NTE2/MS03NTcyLmpwZWc.jpeg" },
  { name: "Electric Ladyland", artist: "Jimi Hendrix", year: 1968, cover: "https://i.discogs.com/GaLJDm3ok3fLOUSswWkHqaeCVVweWSvZFNL83TJ-3XQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUzODQ0/MC0xNTkyMDcxODQx/LTM0MjcuanBlZw.jpeg" },
  { name: "White Album", artist: "The Beatles", year: 1968, cover: "https://i.discogs.com/XYZpPIjpu0hhmDumOZR6DOK3XJKvOWmWrp5XvgmOFb4/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc2ODcy/OS0xMzAwMTE1NDM4/LmpwZWc.jpeg" },
  { name: "Cheap Thrills", artist: "Big Brother and the Holding Company", year: 1968, cover: "https://i.discogs.com/xlygcdCs4Zr1RPUNNlSL9IumtFCCZwkrwnpG2w6FLc0/rs:fit/g:sm/q:90/h:613/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU1OTU2/MC0xNDQxNzc5NDcx/LTI4MjMuanBlZw.jpeg" },
  { name: "Beggars Banquet", artist: "The Rolling Stones", year: 1968, cover: "https://i.discogs.com/FYu6pIuI3Uig2weaFcmROEZI__qwAkbU43LUmCYb6Z4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4OTMy/NjctMTQwNTU5OTQ0/Mi03NzM4LmpwZWc.jpeg" },
  { name: "Abbey Road", artist: "The Beatles", year: 1969, cover: "https://i.discogs.com/M2yc5OJZPdVoDm2_UlRRXuDlDguamLLSdnbziNmZoQI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2MDc0/MjQtMTYzMDYwMTA4/Ny0xMTk5LmpwZWc.jpeg" },
  { name: "Led Zeppelin", artist: "Led Zeppelin", year: 1969, cover: "https://i.discogs.com/jm1RiHhKTQJzLdhL__mO_LXWBIXkGDr_AU0_JPcPqsE/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMTgy/MTctMTIwMTQ4ODE4/Ni5qcGVn.jpeg" },
  { name: "Tommy", artist: "The Who", year: 1969, cover: "https://i.discogs.com/rAw6Getw8bgA-76fjVHr8V3ep9tKS1fimdq_wjBBnsk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgxMDkx/NC0xMzY2NzEyODky/LTk2NTguanBlZw.jpeg" },
  { name: "In the Court of the Crimson King", artist: "King Crimson", year: 1969, cover: "https://i.discogs.com/UeZaB_R11Ap3iJOgt0aRB9t6a0CcuYM-Xqv2nxCdVus/rs:fit/g:sm/q:90/h:633/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyODc2/NjktMTYwMDU5MDg4/MC00MDU3LmpwZWc.jpeg" },
  { name: "Let It Bleed", artist: "The Rolling Stones", year: 1969, cover: "https://i.discogs.com/QbnTz5IB-HtC_bsg7G_79LI8o2bwL5de_DH6rnAIGtY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNDQ5/NTItMTMzMTczNjgy/My5qcGVn.jpeg" },
  { name: "Crosby Stills & Nash", artist: "Crosby Stills & Nash", year: 1969, cover: "https://i.discogs.com/FHd9UKsWUe92tvVbtqRP74JJnDgFFHYiVhPoCqz3WFQ/rs:fit/g:sm/q:90/h:608/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNjQ1/MTQtMTc2Mzg3ODk3/OS02NzMyLmpwZWc.jpeg" },
  { name: "Stand!", artist: "Sly and the Family Stone", year: 1969, cover: "https://i.discogs.com/nfc8aw0QqmziXFCc8Je50Kg-Kd6Uvfl-Hdc5LhWdjAE/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgxMzE2/OC0xMzMzOTMyMzQ3/LmpwZWc.jpeg" },
  { name: "Paranoid", artist: "Black Sabbath", year: 1970, cover: "https://i.discogs.com/voeFelA0ho9aKgQJPbpul2EnI3zz5ad_llCKfQmxjts/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY5Njc3/Mi0xNzQ1MDAyNTIz/LTIwNDUuanBlZw.jpeg" },
  { name: "Bridge over Troubled Water", artist: "Simon & Garfunkel", year: 1970, cover: "https://i.discogs.com/Rcxu8BdgBW5qBrjL5RRbolBqjpU0cJaror3m9i1hJQE/rs:fit/g:sm/q:90/h:612/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NzAz/MDYtMTQyMTIyNTY4/Ny0zMDIyLmpwZWc.jpeg" },
  { name: "Bitches Brew", artist: "Miles Davis", year: 1970, cover: "https://i.discogs.com/F87qkFeQhNMAJdCEL5iipmmEk_yU2609NShVzWN5zN8/rs:fit/g:sm/q:90/h:609/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3MDA2/LTEzOTM0ODQyNDkt/MjIxNS5qcGVn.jpeg" },
  { name: "After the Gold Rush", artist: "Neil Young", year: 1970, cover: "https://i.discogs.com/ylWWw2Y1IrETuPJ1AFAfTSLAR_9s4pL-RTOXmnNLo6o/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzNDUy/OTAtMTQxNTEyMjQy/NC00MDU3LmpwZWc.jpeg" },
  { name: "Sticky Fingers", artist: "The Rolling Stones", year: 1971, cover: "https://i.discogs.com/o9R8QYvUoTS2oYLcwafENzL-WhFv0L8EkozplOilYSA/rs:fit/g:sm/q:90/h:610/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMjcy/Njg3LTE2Mjk1Nzc1/NzQtNDYyNS5qcGVn.jpeg" },
  { name: "Who's Next", artist: "The Who", year: 1971, cover: "https://i.discogs.com/BzB1uwu8ah6K-r4jvn641iynaN7uq_CV7KfF2OWEd5c/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MDk3/OTA4LTE1Njc4MDI1/NTctMjM5OC5qcGVn.jpeg" },
  { name: "Blue", artist: "Joni Mitchell", year: 1971, cover: "https://i.discogs.com/My4PyjnrLCtBdBCmn-AnQRU_bswrrNT-f4M87oqMZlI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMDI4/MzgxLTE0OTAzODMz/MjEtNTc4OS5qcGVn.jpeg" },
  { name: "Tapestry", artist: "Carole King", year: 1971, cover: "https://i.discogs.com/re5JdP_ATjuHxGgAp0-wylQCAgbqBsERjCdxO5bwWyU/rs:fit/g:sm/q:90/h:586/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzOTU1/MzAtMTM4OTk0Mzc1/NS01NjAzLmpwZWc.jpeg" },
  { name: "Electric Warrior", artist: "T. Rex", year: 1971, cover: "https://i.discogs.com/G0UGRZvXShXsx6v4r2EOC58uGlY5PcT450ohvIF8RSQ/rs:fit/g:sm/q:90/h:607/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1MTE4/My0xNzU2NzI0OTIy/LTQwNzQuanBlZw.jpeg" },
  { name: "Hunky Dory", artist: "David Bowie", year: 1971, cover: "https://i.discogs.com/qLN8qLruvtgYKjbSn4DUsQE6Q7AlQ6i9A7JHIIJCcIs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NjU1/NTgtMTUyMDg0Nzc0/MC0yNjU2LmpwZWc.jpeg" },
  { name: "Exile on Main St.", artist: "The Rolling Stones", year: 1972, cover: "https://i.discogs.com/E1mU0s3-uQSxAhjw2ZSLA5Q0bTw6ZvePzFXWvatm7LY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3NTg1/NC0xNzEyMTM2Nzg4/LTc5NDkuanBlZw.jpeg" },
  { name: "Machine Head", artist: "Deep Purple", year: 1972, cover: "https://i.discogs.com/WaMSR2U1jFFSc1PPZMSJpUCwvCdOjUmMcXo0HFvhUiI/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3NTQz/NjQtMTc1NjMzMDYx/MS01NzQzLmpwZWc.jpeg" },
  { name: "Harvest", artist: "Neil Young", year: 1972, cover: "https://i.discogs.com/HIG9DTdEHes_xcLLoiYh-VV0yl1SDOwUkieABv6BrUY/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNDQy/ODctMTQwMDMyNzM1/OS02OTM1LmpwZWc.jpeg" },
  { name: "The Dark Side of the Moon", artist: "Pink Floyd", year: 1973, cover: "https://i.discogs.com/oHPDj8NWtkGhq7kSCJuJ4pEnThoYx3JgU9kcDyvbeKo/rs:fit/g:sm/q:90/h:609/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NzMw/MTMtMTcyNzc2NDkx/OS04NTI3LmpwZWc.jpeg" },
  { name: "Innervisions", artist: "Stevie Wonder", year: 1973, cover: "https://i.discogs.com/kTmxkCOqgTjlBMskbS8Fb3IcZDlFYsv4PsVZTiZCbEM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMjg2/MzMxLTE1NTE0MDA5/MTYtNDE2OS5qcGVn.jpeg" },
  { name: "Goodbye Yellow Brick Road", artist: "Elton John", year: 1973, cover: "https://i.discogs.com/B6XiWakUHcatq54dvWh7IlABQI2YW8ZMWcQIacGG2MY/rs:fit/g:sm/q:90/h:577/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYzMzkz/NTktMTczOTkwMjAz/Ny0xNzc3LmpwZWc.jpeg" },
  { name: "Aladdin Sane", artist: "David Bowie", year: 1973, cover: "https://i.discogs.com/GRCkybUp0qFCQaBOAl_rRomCEzweg2xSJKnJv-CW4Cg/rs:fit/g:sm/q:90/h:550/w:550/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NDkw/Ni0xNDEyNzc1NzU1/LTQwMTIuanBlZw.jpeg" },
  { name: "Band on the Run", artist: "Paul McCartney & Wings", year: 1973, cover: "https://i.discogs.com/lEprRy57pVuHIue_IcrNOILo5kzA-Yh6vWLA3zETr6w/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ0MDI2/Ny0xNDUxNTY1OTY0/LTY3NzguanBlZw.jpeg" },
  { name: "Burn", artist: "Deep Purple", year: 1974, cover: "https://i.discogs.com/oCZTylGcwVtOF5vIzk7EZK8adAStaSi_7aJw3pehBbU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4MjA5/ODMtMTM3NzE3MDg5/Mi04MDY4LmpwZWc.jpeg" },
  { name: "Red", artist: "King Crimson", year: 1974, cover: "https://i.discogs.com/OeFwNq1JL_0DaSHYnOOJvazuUiTIOPEs5VhpQEvaOOk/rs:fit/g:sm/q:90/h:580/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcwMjMz/Ny0xNDQ2NDAwMjYw/LTM2MzcuanBlZw.jpeg" },
  { name: "Wish You Were Here", artist: "Pink Floyd", year: 1975, cover: "https://i.discogs.com/pZnTKUeiKsxSyvX_87YMgccx0bq5sjqThFH9iSNAtAY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MjEx/ODEyLTE2MzczMzYw/OTctOTI4MC5qcGVn.jpeg" },
  { name: "Born to Run", artist: "Bruce Springsteen", year: 1975, cover: "https://i.discogs.com/hAR0qHaM4t0OU-BFbJLFyk9hzDqPUUbQhWAIZOeMpzo/rs:fit/g:sm/q:90/h:894/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0MzM3/NjAyLTE3NTA1NzI5/MDAtNTkyNy5qcGVn.jpeg" },
  { name: "Physical Graffiti", artist: "Led Zeppelin", year: 1975, cover: "https://i.discogs.com/x3ZpnVYVFbxLgfbyGkI5YJd8ySOeh9uUaHxOHr9uaZ4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1ODkz/OS0xNTg4ODgxMTUx/LTE5OTUuanBlZw.jpeg" },
  { name: "Horses", artist: "Patti Smith", year: 1975, cover: "https://i.discogs.com/9hw7emAk1D4v_a6tgVR7YYcVWTWv_nKoY2_-QSdvqbY/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2MjQz/NzMtMTU5NTY3OTQz/My00NTkyLmpwZWc.jpeg" },
  { name: "A Night at the Opera", artist: "Queen", year: 1975, cover: "https://i.discogs.com/k-V_vWHAU4Ex0HMiSr8JdgMJUPuKMUKC_ooKiubm_nY/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYxMjc4/MC0xNzY4NTAwMjU5/LTIzNzUuanBlZw.jpeg" },
  { name: "Ramones", artist: "Ramones", year: 1976, cover: "https://i.discogs.com/Ltqt_wzOYWN2HvAitZ4pPA41ZliX2AnPeJmxArLzJLU/rs:fit/g:sm/q:90/h:608/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg5MDM1/Mi0xNjExMjEyMzcx/LTYxOTEuanBlZw.jpeg" },
  { name: "Songs in the Key of Life", artist: "Stevie Wonder", year: 1976, cover: "https://i.discogs.com/YzhtLts7LkthVlFHqcaq5ZNZ59GEwslZA9KCw556CSc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NTIz/My0xNDI2MTY2MTc0/LTkwODYuanBlZw.jpeg" },
  { name: "Hotel California", artist: "Eagles", year: 1977, cover: "https://i.discogs.com/TdUufJLlsrwUtDKlNnZE7q7NtWOjNZ3y5ZdKvQAI4Hk/rs:fit/g:sm/q:90/h:591/w:590/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3MjE5/MS0xNDQ5NjAzMTk0/LTk1MDcuanBlZw.jpeg" },
  { name: "Low", artist: "David Bowie", year: 1977, cover: "https://i.discogs.com/U3pqMqj3_qkfW3A7TSy0MJCOfaPuERLdNEWjjxgFjRs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxNjE2/Ni0xMjc1NjI1NjQ5/LmpwZWc.jpeg" },
  { name: "Animals", artist: "Pink Floyd", year: 1977, cover: "https://i.discogs.com/_hYJ-UiHBq0KtuIlz26o-4Ar82o9589HIFIE5XOXuVU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM5MTMy/Mi0xNjkxNTYzMjc4/LTYwODAuanBlZw.jpeg" },
  { name: "Bat Out of Hell", artist: "Meat Loaf", year: 1977, cover: "https://i.discogs.com/R78Jh_f2oqueI2OVjiXsTyxZfoMJV-4O7__LUftJUdM/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODU4/MTMwLTE2NDI5MDIx/ODYtNjI1OC5qcGVn.jpeg" },
  { name: "Parallel Lines", artist: "Blondie", year: 1978, cover: "https://i.discogs.com/YrPi-9qDsleOuFgWWjciKH9LzPdvcpVcejlXMhUbO04/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1ODAx/OTktMTMyNzY0OTA2/NS5qcGVn.jpeg" },
  { name: "Some Girls", artist: "The Rolling Stones", year: 1978, cover: "https://i.discogs.com/Uyz3scDXGaTPDmerNUaABu6yLApi2DDDAMFzyaBxml0/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUyNDkz/NzgtMTQyNjAwMDMz/Mi03NDE2LmpwZWc.jpeg" },
  { name: "Darkness on the Edge of Town", artist: "Bruce Springsteen", year: 1978, cover: "https://i.discogs.com/KZ_Tln68Qq3Otq7cowf94ohlg55bODrLUGtEagbZQ6c/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwMTIz/NzEtMTMxMTY3Nzk2/MS5qcGVn.jpeg" },
  { name: "Van Halen", artist: "Van Halen", year: 1978, cover: "https://i.discogs.com/roczw_NtkkygG6ynC3N_8BtJbPisLXnMk5uawMhE58M/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4OTI1/NDktMTM4NzkyNzYw/Ny00MjU3LmpwZWc.jpeg" },
  { name: "More Songs About Buildings and Food", artist: "Talking Heads", year: 1978, cover: "https://i.discogs.com/Iu7w7fsdPJ0Y8ZRbupV_ZyqnChsf4ZBzSiQxeQq9kQU/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcwMjcz/MTYtMTQzMTk4NTAx/MC03ODQyLmpwZWc.jpeg" },
  { name: "The Wall", artist: "Pink Floyd", year: 1979, cover: "https://i.discogs.com/gvMsVECicK2YRlJ7S9wlbeLS2L_o39owUyYlv6JTc3w/rs:fit/g:sm/q:90/h:600/w:588/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3Mzcx/ODU2LTE2ODY2NjQx/NzUtOTY5NC5qcGVn.jpeg" },
  { name: "Fear of Music", artist: "Talking Heads", year: 1979, cover: "https://i.discogs.com/uslqEpobhNgqiLTgC7lh9dk6CQqawAgLQVd52agi-64/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNjQ4/OS0xNDM0NTczMTA5/LTQ5ODkuanBlZw.jpeg" },
  { name: "Rust Never Sleeps", artist: "Neil Young", year: 1979, cover: "https://i.discogs.com/vuwOzYhanFLjB4lv0Sm9hE_kB7rHE4dEuCHlCS0cSO0/rs:fit/g:sm/q:90/h:588/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk0NDE0/My0xNDk4Nzg3OTc4/LTY5NzcuanBlZw.jpeg" },
  { name: "Remain in Light", artist: "Talking Heads", year: 1980, cover: "https://i.discogs.com/rHJU3UXR0FAkeUkU4vZpdpF3XwsLoJeitBnQVCxjRQQ/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNjQ5/MS0xNTQxOTQ1NDcy/LTQ3OTUuanBlZw.jpeg" },
  { name: "Back in Black", artist: "AC/DC", year: 1980, cover: "https://i.discogs.com/xf2PKezzQ243HuyRnERV8RTSzX_r9Nni7QZactGZjQY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQwMDU5/MS0xNTM3MDM1ODI5/LTEzOTEuanBlZw.jpeg" },
  { name: "Closer", artist: "Joy Division", year: 1980, cover: "https://i.discogs.com/8po40WH3m-4TGoKrTQlj2QuT3_1hm7wCQQQkRLMJQUs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgxNjky/LTE1Mzg5OTI1MzEt/NzU1MS5qcGVn.jpeg" },
  { name: "Boy", artist: "U2", year: 1980, cover: "https://i.discogs.com/gO9jnSJFdVD6fSNoskXlWHzm7FQgTivrIj3SxLFx-_I/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUxMDgx/ODEtMTYyNzkzMTM0/Ny03MzQyLmpwZWc.jpeg" },
  { name: "Damaged", artist: "Black Flag", year: 1981, cover: "https://i.discogs.com/tuP0nWB-DXzINUKh-dqaupL72gx7D-VsnNgAQax4IW8/rs:fit/g:sm/q:90/h:602/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4MTE1/Mi0xNjg4MzAxMjQ0/LTc2MTYuanBlZw.jpeg" },
  { name: "Ghost in the Machine", artist: "The Police", year: 1981, cover: "https://i.discogs.com/VyuF6_KFyhRMpmiUfCSpQAsgSJcXgcxT0cbgMo6xlv0/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MDYz/OTctMTYxMDU0NDQ3/NC03ODQxLmpwZWc.jpeg" },
  { name: "Dare", artist: "The Human League", year: 1981, cover: "https://i.discogs.com/kbaFQ0fqG_TF99Cn7IPM1tJYWiVL4cMp1M5s6UuTiww/rs:fit/g:sm/q:90/h:588/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NzI5/LTE2ODcxODc4MDgt/MzQ3Ny5qcGVn.jpeg" },
  { name: "1999", artist: "Prince", year: 1982, cover: "https://i.discogs.com/kTzyrAA87kwhD6a7b7iTNzGdreL2I1ZIIPwPeLQlB4A/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMjU4/MzU0LTE0OTQzNzg3/NTEtNzMzNy5qcGVn.jpeg" },
  { name: "The Number of the Beast", artist: "Iron Maiden", year: 1982, cover: "https://i.discogs.com/-wHpEmzsOPDHv755TdLKf4a4rS0i-zCmrdu8492KxOk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NjYy/OTktMTY0NTU0MTQx/NC0yNDk0LmpwZWc.jpeg" },
  { name: "Rio", artist: "Duran Duran", year: 1982, cover: "https://i.discogs.com/IPvpGILchRDnhOpdN9AD3Agsvmu-Nc4nCiJfunHnVHg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MDg0/My0xNjkwNjU4MjAz/LTQ3MTIuanBlZw.jpeg" },
  { name: "War", artist: "U2", year: 1983, cover: "https://i.discogs.com/kimkxJqhtRh3zwJ3QcdWWxwnxRpkC6ZAnXfBpUMV49c/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc4NjE2/MS0xNjE3Mzc4Njk3/LTM0MDUuanBlZw.jpeg" },
  { name: "Murmur", artist: "R.E.M.", year: 1983, cover: "https://i.discogs.com/WgAg2KwLkXIpgL6cU0FehG-7ySRKigKwba9PPaur7yA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ0ODAx/NTAtMTU4NDQ3OTUw/Mi05MzEwLmpwZWc.jpeg" },
  { name: "Speaking in Tongues", artist: "Talking Heads", year: 1983, cover: "https://i.discogs.com/w3G0LxzwepwIgx7NkozV23OhlQ3j0XZ3WsvHPH6J1DQ/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3MDcx/OS0xNDM3NDU0NzA4/LTQ4OTQuanBlZw.jpeg" },
  { name: "Synchronicity", artist: "The Police", year: 1983, cover: "https://i.discogs.com/q6GPXiH-pLBsrs7pLQDKFgFB43t85ZAlZN0XSdFiQtM/rs:fit/g:sm/q:90/h:586/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2Nzc1/MC0xNDQzMjIwNjMz/LTExNDcuanBlZw.jpeg" },
  { name: "Born in the U.S.A.", artist: "Bruce Springsteen", year: 1984, cover: "https://i.discogs.com/fltQHhVK5EGabzwAqAJupEJqZ6RpDhZ1wLZVJoQtrkE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNDMy/MjctMTM2NTM3MzYw/OC0xMDEwLmpwZWc.jpeg" },
  { name: "Like a Virgin", artist: "Madonna", year: 1984, cover: "https://i.discogs.com/GK85qS-oBUfj_8rjFHQaO73HW16U51qRS5EEV5ZDuGg/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyODk0/MDgtMTQxODg4NjE4/NC0xMjc2LmpwZWc.jpeg" },
  { name: "Hatful of Hollow", artist: "The Smiths", year: 1984, cover: "https://i.discogs.com/oJ85N6HJOBPwHlzIUJpersJGDpAhO9zXYt__ulYOJSY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4MjEz/NS0xNjY4MTM5NDE5/LTk5NjguanBlZw.jpeg" },
  { name: "Meat Is Murder", artist: "The Smiths", year: 1985, cover: "https://i.discogs.com/tltMybBjF5lkEuaymF6sCLPZqMYVM7UK0yrl4u_Pmmg/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3MzI0/MC0xMTg5NzEyNjQ0/LmpwZWc.jpeg" },
  { name: "Hounds of Love", artist: "Kate Bush", year: 1985, cover: "https://i.discogs.com/Q5ff8RLDjCctXg_yQH1rCKoJ99js9Axd6dmNBiWdVDI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5NzE2/My0xNzY4MDUyNjg1/LTI1MTYuanBlZw.jpeg" },
  { name: "Psychocandy", artist: "The Jesus and Mary Chain", year: 1985, cover: "https://i.discogs.com/3vHqTuomdyGyUO-XS0BiRnswZrrJxXwB7Ty48WTJxj0/rs:fit/g:sm/q:90/h:611/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2OTg4/My0xNTk0NzUwNTUx/LTQ3ODYuanBlZw.jpeg" },
  { name: "Brothers in Arms", artist: "Dire Straits", year: 1985, cover: "https://i.discogs.com/5ZxkBZ0klld4JTkz-Iv_R5VSZAAbMVRevI-ot7JAX9o/rs:fit/g:sm/q:90/h:602/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4MjQx/Ny0xNTc2NzU5OTAw/LTc4NjMuanBlZw.jpeg" },
  { name: "The Queen Is Dead", artist: "The Smiths", year: 1986, cover: "https://i.discogs.com/8T8F8Aoe4Sb207KcKjHQWClBY3NLeU_4q3XCREdBtRc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NDky/Ny0xMjMwODU0MDIz/LmpwZWc.jpeg" },
  { name: "Master of Puppets", artist: "Metallica", year: 1986, cover: "https://i.discogs.com/92G75VZzdW9SCXwRh2huoW48W-9yCm1fw4o0uMm3rJg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NDk2/MzYtMTc1MzUzMTI0/Ny00OTA5LmpwZWc.jpeg" },
  { name: "Graceland", artist: "Paul Simon", year: 1986, cover: "https://i.discogs.com/ISJqBYX78JJ0G2M3rpdLppCr4GpmQMSaawYCYwOH9ZE/rs:fit/g:sm/q:90/h:594/w:589/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMzEz/ODgtMTI1MzMxNjQ5/MS5qcGVn.jpeg" },
  { name: "Sign o' the Times", artist: "Prince", year: 1987, cover: "https://i.discogs.com/bsPrdbDspl9YGEVsk5Wp7ogNFCRYqZVHW4X_Of1jQVM/rs:fit/g:sm/q:90/h:612/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMzkx/NS0xMjM0MTMzMzYy/LmpwZWc.jpeg" },
  { name: "Appetite for Destruction", artist: "Guns N' Roses", year: 1987, cover: "https://i.discogs.com/VQy0HOhX4RiGLIg0LXi-RiZMJG8wtJDvFaBbarerjyA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4Mzc3/Ny0xMTczNTQzMzU5/LmpwZWc.jpeg" },
  { name: "The Stone Roses", artist: "The Stone Roses", year: 1989, cover: "https://i.discogs.com/J6AJ0RvoWIhVlee8UGo0gABomN04-6ffCuj50WEb8O4/rs:fit/g:sm/q:90/h:615/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NjA5/Mi0xNjEzMzcxMzYy/LTQwMzMuanBlZw.jpeg" },
  { name: "Doolittle", artist: "Pixies", year: 1989, cover: "https://i.discogs.com/HG_-j37d1XDln3KMI8iKlehH12kScU-xI93lfMBQ0L0/rs:fit/g:sm/q:90/h:550/w:550/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4MDU5/MDYtMTM5NjEzNjAx/NS0yMjM3LmpwZWc.jpeg" },
  { name: "3 Feet High and Rising", artist: "De La Soul", year: 1989, cover: "https://i.discogs.com/OrCn9r6cRNnYJvUyurAIu5fBhyoEw1J25w5Wmy0gHuU/rs:fit/g:sm/q:90/h:593/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMDU1/NTUtMTY4MTU4OTUy/Mi00NjMzLmpwZWc.jpeg" },
  { name: "Paul's Boutique", artist: "Beastie Boys", year: 1989, cover: "https://i.discogs.com/Jej9dZnefTrbYpCbwmCZWsfwtYpAWrPJPw-yemICfXs/rs:fit/g:sm/q:90/h:550/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MDU4/MzEtMTQyNDc5MjE3/Mi04OTgyLmpwZWc.jpeg" },
  { name: "Violator", artist: "Depeche Mode", year: 1990, cover: "https://i.discogs.com/DTZx33OqUlUowjvskQDAhExfHXlkaULg9vFSA0iUQys/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ2OTA1/LTE2NjYyMDQ3Mzgt/OTUzMC5qcGVn.jpeg" },
  { name: "Ritual de lo Habitual", artist: "Jane's Addiction", year: 1990, cover: "https://i.discogs.com/G1Smju_TlbeYdaYcm2b8ddhVSVvfEH4xm2F1moV2cxw/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3Mjc0/OS0xMzM1OTA4Mzkz/LmpwZWc.jpeg" },
  { name: "Loveless", artist: "My Bloody Valentine", year: 1991, cover: "https://i.discogs.com/BX3VaGJBENv-zgHEdez23DDFIVQlaSWGgdr_8hG6dWA/rs:fit/g:sm/q:90/h:280/w:280/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNzYy/Mi0xMjUwMjA4Njc5/LmpwZWc.jpeg" },
  { name: "Achtung Baby", artist: "U2", year: 1991, cover: "https://i.discogs.com/nBg0Y6yaPLZja7D7pCCXlxF156eDrjirPNpvkTiV4eU/rs:fit/g:sm/q:90/h:550/w:550/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MzUy/MTUtMTQwMjY2MDUz/MS00MjE4LmpwZWc.jpeg" },
  { name: "Ten", artist: "Pearl Jam", year: 1991, cover: "https://i.discogs.com/bAeddkpWbAQ8-YNTMUx18RC70hD69IywQ1v68_QnqoQ/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2NzY2/NC0xNDA4OTA3MDU0/LTcyMDQuanBlZw.jpeg" },
  { name: "Blood Sugar Sex Magik", artist: "Red Hot Chili Peppers", year: 1991, cover: "https://i.discogs.com/TBFMsp_ki2nO56jvJ4CR7X5KwWGv1Apai7DPg-3usyI/rs:fit/g:sm/q:90/h:590/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3NTQ5/MS0xNTA3MjkyNTg2/LTE5NDIuanBlZw.jpeg" },
  { name: "Check Your Head", artist: "Beastie Boys", year: 1992, cover: "https://i.discogs.com/Riovcn3DrWelEWldQCHy-FSY3ODhbdU3-aRXd0oPTzI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2NzU0/OC0xNTIyNzg2NjY1/LTkwODQuanBlZw.jpeg" },
  { name: "Rage Against the Machine", artist: "Rage Against the Machine", year: 1992, cover: "https://i.discogs.com/Kfl2yf4D2xTTYKjP2-zn8b2gCukUVWNgMFOs7vIlMUU/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2NzMz/OS0xNjE1MDM3NzYy/LTc2NTkuanBlZw.jpeg" },
  { name: "Siamese Dream", artist: "Smashing Pumpkins", year: 1993, cover: "https://i.discogs.com/No3fwl1zEI4A0bktAkKvAUk_JTbHst62P479gMT4cKA/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcwODY1/MDEtMTQzMzQwNTc3/Mi0yNjgyLmpwZWc.jpeg" },
  { name: "Debut", artist: "Bjork", year: 1993, cover: "https://i.discogs.com/Nh3mW3Nkr2KO36rm4mAbS31YGDIfOZ8ej24YTdPEkvg/rs:fit/g:sm/q:90/h:581/w:588/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNTk1/MzMtMTIzMjE0ODIw/OS5qcGVn.jpeg" },
  { name: "In Utero", artist: "Nirvana", year: 1993, cover: "https://i.discogs.com/ijIUNhH--0OKzKuKv-aLpgFkb7lr6OQVb5FcAF_aW0U/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3NTk3/OS0xNDkxNzAwMzQ3/LTcyNjMuanBlZw.jpeg" },
  { name: "Midnight Marauders", artist: "A Tribe Called Quest", year: 1993, cover: "https://i.discogs.com/BTkJhAP-XrREK2wzcjU5EVjEJjhkdZtbwoNnV9g5HXo/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkzNjM1/LTE2OTEwMDE2OTIt/MzkxMC5qcGVn.jpeg" },
  { name: "Dookie", artist: "Green Day", year: 1994, cover: "https://i.discogs.com/WnOipLddcj-28F_qXuGNFI6m53cnaaEx-9CUFlvweCY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMDM3/ODgtMTUwNzgxNDY2/Ny05NTU4LmpwZWc.jpeg" },
  { name: "Definitely Maybe", artist: "Oasis", year: 1994, cover: "https://i.discogs.com/nHm-BFfSt7Gl6BZ1lNDX7YgBbdUagvVwKTVVzwiiMIk/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUwNzM5/MTUtMTQ2NzgxNzEz/Ni00MTYwLmpwZWc.jpeg" },
  { name: "Ready to Die", artist: "The Notorious B.I.G.", year: 1994, cover: "https://i.discogs.com/yb0r6p94nVc_xU2vLsGWDEwiZfYznIBWVRUgGeZ_Ljw/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg0ODky/MDktMTQ2MjYyNzU5/MC03NTQwLmpwZWc.jpeg" },
  { name: "Dummy", artist: "Portishead", year: 1994, cover: "https://i.discogs.com/Mi3GFDEziuGDcohp4VFKmwaRYSSmRZHq6hEq7EX73Ts/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMjM5/MTE2LTE2MTI4NjMz/NTMtNTA5My5qcGVn.jpeg" },
  { name: "The Downward Spiral", artist: "Nine Inch Nails", year: 1994, cover: "https://i.discogs.com/3ojla1eXxvtZKHkXureOswYOv-apRsSi-Ys73dodmtc/rs:fit/g:sm/q:90/h:536/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg4NTE4/NjUtMTQ3MDEwOTA3/Ny04MjE5LmpwZWc.jpeg" },
  { name: "Crooked Rain Crooked Rain", artist: "Pavement", year: 1994, cover: "https://i.discogs.com/2-kGlSm4VNkh-hYjrMe9_3R-nm49pe_fzhhTgrIcmmk/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3OTQw/MS0xMjQ4Mjk0MzU4/LmpwZWc.jpeg" },
  { name: "Grace", artist: "Jeff Buckley", year: 1994, cover: "https://i.discogs.com/uTqQS51KL9aMKUm4Kuh-EjJh7AtySd2Nj4eeNvSOK2E/rs:fit/g:sm/q:90/h:588/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg3Njc2/MjAtMTczMTk0MDE3/OS01ODM1LmpwZWc.jpeg" },
  { name: "Post", artist: "Bjork", year: 1995, cover: "https://i.discogs.com/0RVhvNQnBcIyQ_bMEObdXuu3fVV62G56Mdcd9SuePFc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMjQ4/MS0xNzE2NzM3NTU3/LTkzODMuanBlZw.jpeg" },
  { name: "The Bends", artist: "Radiohead", year: 1995, cover: "https://i.discogs.com/gI1zT1tRMis1pAp9VJy0JyxJEYBoOQn4-uMT5sAPNUc/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU2Mjk5/MjEtMTU1OTEyOTQ2/MS04NjIyLmpwZWc.jpeg" },
  { name: "Liquid Swords", artist: "GZA", year: 1995, cover: "https://i.discogs.com/CCChjVpJ1KxzRQT192HSVDS4Waw6t5i2dyj5m2b4dz0/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwODEw/OS0xNjY5ODIxNzQ4/LTgzNzkuanBlZw.jpeg" },
  { name: "Only Built 4 Cuban Linx", artist: "Raekwon", year: 1995, cover: "https://i.discogs.com/K-GmGkwf9opG7zA1rqb91UQ05mtbESNnmZotCGO1k2o/rs:fit/g:sm/q:90/h:602/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NDk0/Ni0xNjUwNTM4MTYz/LTc0OTUuanBlZw.jpeg" },
  { name: "Mellon Collie and the Infinite Sadness", artist: "Smashing Pumpkins", year: 1995, cover: "https://i.discogs.com/8Ch7279sOEdCuNO6fGbtoutGO1Kvc-uHOAQ0pmhXajE/rs:fit/g:sm/q:90/h:588/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwMzk3/MzMtMTYyMTYyNTgx/OC0yODQ2LmpwZWc.jpeg" },
  { name: "Different Class", artist: "Pulp", year: 1995, cover: "https://i.discogs.com/nMdmxmKRXZXhK7lv22FNEG1ugoJXiLCvh_9Vx0dvJq4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwMjE2/Ni0xMjEzMjA5NDY0/LmpwZWc.jpeg" },
  { name: "(What's the Story) Morning Glory?", artist: "Oasis", year: 1995, cover: "https://i.discogs.com/EPjymcFyvhNUi2pT09bctj7X69dOIkk7Bv9cAQTg-p4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3MTM0/MS0xNzM1NzY1MTM0/LTIxMzUuanBlZw.jpeg" },
  { name: "Maxinquaye", artist: "Tricky", year: 1995, cover: "https://i.discogs.com/H22Sg4s1Fi_16n1gzUV2d0Wn9-r-HOh1HrNNILVwKek/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU1MTYx/LTE3MjgxMjczMDUt/NTYyNS5qcGVn.jpeg" },
  { name: "Reasonable Doubt", artist: "Jay-Z", year: 1996, cover: "https://i.discogs.com/n5pJGyZZzPhCoTjw8t-RtJjJXLzuoX2MSouolvZsQK4/rs:fit/g:sm/q:90/h:606/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNzAy/MS0xNjg4OTA3NjEw/LTE3MzguanBlZw.jpeg" },
  { name: "Odelay", artist: "Beck", year: 1996, cover: "https://i.discogs.com/zz1Rh_bcCNJGh4FPZWlO4YL80_STqCw3J0Iu0cFBnkA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NTg1/NS0xMjUxMDkwOTI3/LmpwZWc.jpeg" },
  { name: "Endtroducing", artist: "DJ Shadow", year: 1996, cover: "https://i.discogs.com/64IrpeQ8UnCjCwGArcyg2BbQN0qJ7_s6jObeBiNIaNk/rs:fit/g:sm/q:90/h:582/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUwNTgt/MTU0OTc3ODczNS0x/MTcxLmpwZWc.jpeg" },
  { name: "ATLiens", artist: "OutKast", year: 1996, cover: "https://i.discogs.com/KJytWYxPL-Qyok_wd5qhgz7Azzy8o7aHypb5jnKbvcU/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyOTcz/Ny0xNzA5NDU3NTUz/LTMzOTcuanBlZw.jpeg" },
  { name: "If You're Feeling Sinister", artist: "Belle and Sebastian", year: 1996, cover: "https://i.discogs.com/ExlQmI2votn0vz8b0BEbHiLPZlSVZRVGCTVkwe1eb3o/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3ODg5/NS0xMjk1NDM0NTM2/LmpwZWc.jpeg" },
  { name: "The Score", artist: "Fugees", year: 1996, cover: "https://i.discogs.com/sUC-OcPFlR1nXz8VFp1eBUbrdSKSQVM7TYGPAkDgTpg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc5NTk1/OTUtMTQ2ODYxMTk2/OC01MjM2LmpwZWc.jpeg" },
  { name: "Dig Your Own Hole", artist: "The Chemical Brothers", year: 1997, cover: "https://i.discogs.com/7_mkxjN0Qz5Gxf7Za_uOzGJM0SAnV2f2GdCV9rAiN3w/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkxMzEt/MTMwNjU5ODAwMS5q/cGVn.jpeg" },
  { name: "Either/Or", artist: "Elliott Smith", year: 1997, cover: "https://i.discogs.com/ysaN4kHg-tYnHrL7WXEfzy2wORwJ80TVT_49sXzDHNk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMjA2/NjA5LTE1NDk5MjE1/MjUtMzc1Ni5qcGVn.jpeg" },
  { name: "Ladies and Gentlemen We Are Floating in Space", artist: "Spiritualized", year: 1997, cover: "https://i.discogs.com/E43VBukW-5t8EGtkKRiQ1KQXaPB7VeFPqTbfXwQbVwU/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNDY5/OTQtMTI1MDk0OTAx/NS5qcGVn.jpeg" },
  { name: "Life After Death", artist: "The Notorious B.I.G.", year: 1997, cover: "https://i.discogs.com/3o8Y0Ss1T-xH-V2TsQAjFaDrdshYApbes41pTRkooGA/rs:fit/g:sm/q:90/h:603/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2ODA5/MC0xNjU0MTAwMzU0/LTg3NTIuanBlZw.jpeg" },
  { name: "Urban Hymns", artist: "The Verve", year: 1997, cover: "https://i.discogs.com/QIkaF0vFw9rXyJhMc_fF4hNh8RIbqAL-yZPYLLZ4yfg/rs:fit/g:sm/q:90/h:601/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3MTI5/OTItMTI5NzcyMjQ2/NS5qcGVn.jpeg" },
  { name: "Aquemini", artist: "OutKast", year: 1998, cover: "https://i.discogs.com/L6PLT3B9qDOO-qzUDYUR-CrwcJ71YYKkyJ_fLs2FJOY/rs:fit/g:sm/q:90/h:601/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2OTMy/NS0xNzM2OTQ3MzAy/LTgzODYuanBlZw.jpeg" },
  { name: "Mezzanine", artist: "Massive Attack", year: 1998, cover: "https://i.discogs.com/t2cOvgvzOqKzSFab55cHspWHl5IgiVpbPtLgyzwYmxI/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY1MzAt/MTYxNTMwMzUzMi01/NDI0LmpwZWc.jpeg" },
  { name: "The Miseducation of Lauryn Hill", artist: "Lauryn Hill", year: 1998, cover: "https://i.discogs.com/bTjtNom72YkK2FXCB3dQ9yPEMwlIP2Sp-H4cj832QlY/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTUw/NTIyLTE2MjM3NzE1/NjgtMTI5Ni5qcGVn.jpeg" },
  { name: "Moon Safari", artist: "Air", year: 1998, cover: "https://i.discogs.com/KI0YBTf2J12fwhIYXJUXW1GimJD1xeTfLgKiyWAV_Zw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQxMjAz/OC0xNjExOTkyNTgy/LTMxNjQuanBlZw.jpeg" },
  { name: "Mutations", artist: "Beck", year: 1998, cover: "https://i.discogs.com/arpFJZKPu4aPTELZd2psz3JlNgTmaxBnx-Ub1tug-BE/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MDA3/MjQtMTQ0MDQ3MDc2/Mi0xMzg3LmpwZWc.jpeg" },
  { name: "Californication", artist: "Red Hot Chili Peppers", year: 1999, cover: "https://i.discogs.com/CyHLgusU6vKUZ6AZbiWlLpgtKm2mT05k0NdV5LQvMjM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNjY4/MDQtMTQ2MTI5MDIx/Ni03MDEwLmpwZWc.jpeg" },
  { name: "The Slim Shady LP", artist: "Eminem", year: 1999, cover: "https://i.discogs.com/_juteKcNiW3LFAWv5rA09j_Ex8ehH8Mi9tKyKIo3djQ/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NjQ1/MS0xNjg4MDQ3NzU2/LTg0MDcuanBlZw.jpeg" },
  { name: "Things Fall Apart", artist: "The Roots", year: 1999, cover: "https://i.discogs.com/xbg0bNUHlLYKl-knrhFKYUAnlB8k5RfW-apuWUDVHKo/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMDAy/NzYtMTE4MzUxNzc5/Mi5qcGVn.jpeg" },
  { name: "Agaetis Byrjun", artist: "Sigur Ros", year: 1999, cover: "https://i.discogs.com/4WSBintx9rVc-jZR_VCmlCI4dnAa6gRBg5-TXETZXeY/rs:fit/g:sm/q:90/h:521/w:550/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMTU5/NzUtMTQzNTI2NDQ1/My02MjUzLmpwZWc.jpeg" },
  { name: "Discovery", artist: "Daft Punk", year: 2001, cover: "https://i.discogs.com/OG3sHYS5v6DYm7GMRoOQv7gg0IcDjxcUsBmzEnJmhH4/rs:fit/g:sm/q:90/h:608/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4Nzkt/MTIzNjAzNTQ3Mi5q/cGVn.jpeg" },
  { name: "Amnesiac", artist: "Radiohead", year: 2001, cover: "https://i.discogs.com/rxXrWmyazLPh1vpv6kQ__GMwmFlqQyXcKTysfqm2Lbg/rs:fit/g:sm/q:90/h:575/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3Mzk4/MC0xMzg1Mjc3NzE1/LTI1NjkuanBlZw.jpeg" },
  { name: "Songs for the Deaf", artist: "Queens of the Stone Age", year: 2002, cover: "https://i.discogs.com/yTz1eTIh5JLJrDqE-aEckK14scCzc_GV_nEOhq-XBWk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3OTEy/NzMtMTUyMzE2ODQ5/Mi02MTQ5LmpwZWc.jpeg" },
  { name: "Yankee Hotel Foxtrot", artist: "Wilco", year: 2002, cover: "https://i.discogs.com/GZTjLOTPNerFOKOT3YDI5bLmBWX11ap0PiqDjgXf1Ec/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ0MjY1/MjUtMTQwOTMzODUz/NC05MDMyLmpwZWc.jpeg" },
  { name: "The Eminem Show", artist: "Eminem", year: 2002, cover: "https://i.discogs.com/bFFFxkTr5Fj2nGpQvSZShbJ3TQAOWsMpzvS0F1ImBB4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NjM0/Ni0xNTcxODEwNTQz/LTk4MzIuanBlZw.jpeg" },
  { name: "A Rush of Blood to the Head", artist: "Coldplay", year: 2002, cover: "https://i.discogs.com/ourI3ScU0PVLM-1hJ_3IBvZoCfytFR95zfesJyM4OmI/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUwMjI1/NTUtMTM4MjM3OTUx/Ni02NDU5LmpwZWc.jpeg" },
  { name: "Elephant", artist: "The White Stripes", year: 2003, cover: "https://i.discogs.com/mmbaP_ZM8nDgxZ5dBa0is1XSWNY9bKLWlLQBhc1vShM/rs:fit/g:sm/q:90/h:618/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU2NzMz/Ni0xNzAwMDIxOTU3/LTM2NTEuanBlZw.jpeg" },
  { name: "Speakerboxxx/The Love Below", artist: "OutKast", year: 2003, cover: "https://i.discogs.com/Wkxu_NcnNsjD3mmDoZz3rGrpGUVLhNY4V6LlICfnrCE/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyODAx/Ni0xNDkyNTM5ODEz/LTUxNDYuanBlZw.jpeg" },
  { name: "The Black Album", artist: "Jay-Z", year: 2003, cover: "https://i.discogs.com/Q3qBX3dKw5F9nttCsGpvmPgv4vxz_y9doieYy1aP_40/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1OTQz/Mi0xNDcwNDA5ODQ3/LTg1OTYucG5n.jpeg" },
  { name: "Funeral", artist: "Arcade Fire", year: 2004, cover: "https://i.discogs.com/rcc6N5KItuTqyLkaOjGjsyvb02miEjmB21AJxZz061s/rs:fit/g:sm/q:90/h:543/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQzMjkz/Mi0xNDI3MDEyMDk1/LTE4MDguanBlZw.jpeg" },
  { name: "Madvillainy", artist: "Madvillain", year: 2004, cover: "https://i.discogs.com/1dQNia-p_KgPmSLTMCYkJxVxn3KAa9xo39b1VlW_0yU/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5NDg3/NDctMTM0NTE1ODEw/MC03Mzk0LmpwZWc.jpeg" },
  { name: "Franz Ferdinand", artist: "Franz Ferdinand", year: 2004, cover: "https://i.discogs.com/rEMahcTN5wEoLffjqX0NH09iQZQqgEEXTyeWs2PZ_vo/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NTI4/Ny0xNDIwMzkwNTA5/LTU2ODMuanBlZw.jpeg" },
  { name: "American Idiot", artist: "Green Day", year: 2004, cover: "https://i.discogs.com/hKIvFBg9gGKs_K89iDQqDIjpeVLug9vRTdSK1u5rUyo/rs:fit/g:sm/q:90/h:589/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk3Mzcw/Ni0xNDg4MTYzOTE2/LTg1MTcuanBlZw.jpeg" },
  { name: "Hot Fuss", artist: "The Killers", year: 2004, cover: "https://i.discogs.com/ABzfyvsKcc2b-VVLsG8pH6X3FrodQVc7Pu8cBVvf_G8/rs:fit/g:sm/q:90/h:617/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM5NzE2/Ny0xNTEwODI3ODE5/LTYxNjEuanBlZw.jpeg" },
  { name: "Late Registration", artist: "Kanye West", year: 2005, cover: "https://i.discogs.com/VaGAJ7bFhiP1JY5nrQDFGGw2mmbU7OH0xm_j9msSaNM/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NDE2/OS0xNTAxMjY5NDM1/LTMxNzIuanBlZw.jpeg" },
  { name: "Illinois", artist: "Sufjan Stevens", year: 2005, cover: "https://i.discogs.com/SrLfmGKtXHolPp5v9yvs8s_f6uEuJNNRqB6pzKSJ4PE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4Mjkz/NTAtMTMwMzE0Njc4/MC5qcGVn.jpeg" },
  { name: "Demon Days", artist: "Gorillaz", year: 2005, cover: "https://i.discogs.com/fZJ1BSdJ4r8Pz6rr8m6dJ8VCnqs3XAEB3ElkYRrGads/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg0NDkw/NC0xMTY0NzEyNzc4/LmpwZWc.jpeg" },
  { name: "Silent Alarm", artist: "Bloc Party", year: 2005, cover: "https://i.discogs.com/nuDMvMY2a9JDkxaM-rZBEVIv5QP4Kl4ygVj_rBWumcY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQwNzQ5/Ni0xMzMyNzkyODE5/LmpwZWc.jpeg" },
  { name: "Whatever People Say I Am, That's What I'm Not", artist: "Arctic Monkeys", year: 2006, cover: "https://i.discogs.com/uw3c5_-IkZmWLUINbENQ6eO5lpMpxaWJQ-wqDWP7WPw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYxMjk3/Mi0xNDAxMTgyOTYz/LTczMjIuanBlZw.jpeg" },
  { name: "St. Elsewhere", artist: "Gnarls Barkley", year: 2006, cover: "https://i.discogs.com/LjXf-Mzow4Se1zULWItw2YdyXW38ne9FY0yaEQwfVMM/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY3MTcx/OS0xNDEzOTM2NTQ3/LTk0MzAuanBlZw.jpeg" },
  { name: "Return to Cookie Mountain", artist: "TV on the Radio", year: 2006, cover: "https://i.discogs.com/sJkywR7rK404cA2qW-3IObBnyV-bv68HVXfHHzyH5Fs/rs:fit/g:sm/q:90/h:600/w:594/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcyMTU4/Ni0xMTYyNTcyMTg3/LmpwZWc.jpeg" },
  { name: "The Life Pursuit", artist: "Belle and Sebastian", year: 2006, cover: "https://i.discogs.com/kWsbFNKadtIwIfBXmOzuZu5ytU_wYjNZn9TxrlPSLvE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY2MDQx/MC0xNTEzNjI4NDI1/LTI1MzkuanBlZw.jpeg" },
  { name: "Sound of Silver", artist: "LCD Soundsystem", year: 2007, cover: "https://i.discogs.com/NyQzLM9qp1Dgzqp-nf4djGFJF-ZwjKkqdC3F2ByYkcM/rs:fit/g:sm/q:90/h:577/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkzNTU3/Ny0xNDk2NzAzNTc0/LTgzMDcuanBlZw.jpeg" },
  { name: "Graduation", artist: "Kanye West", year: 2007, cover: "https://i.discogs.com/ZGCZsgTZlSxAbspOky80WD6jI_tc6zoJuXfqZAEWYkI/rs:fit/g:sm/q:90/h:537/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNjY2/MDEtMTYzMjU2Nzcx/Mi0xNTg2LnBuZw.jpeg" },
  { name: "Untrue", artist: "Burial", year: 2007, cover: "https://i.discogs.com/g3Kv3usNWqYekdaXNU3GEFLTtG58o0bEdRx_1CXsPoc/rs:fit/g:sm/q:90/h:536/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMjUx/MDMtMTY5MjczODYy/OS05OTgwLmpwZWc.jpeg" },
  { name: "Ys", artist: "Joanna Newsom", year: 2006, cover: "https://i.discogs.com/lBSZgUKr7g9Q2gxpInVqOvvdZtZLc26ESnsMQanlOjA/rs:fit/g:sm/q:90/h:528/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk1MzU2/MS0xNDg1MzEzODY0/LTUzNTkuanBlZw.jpeg" },
  { name: "Neon Bible", artist: "Arcade Fire", year: 2007, cover: "https://i.discogs.com/kwjQc5JROLFi5I4BTPSUjqgusudcRig_HAfoFgjcDmc/rs:fit/g:sm/q:90/h:523/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQxMjgz/MzMtMTM1NjU4NjQ1/MC0yNDk3LmpwZWc.jpeg" },
  { name: "Kala", artist: "M.I.A.", year: 2007, cover: "https://i.discogs.com/yGQ5gXZhbE06x3VYFk8AhtyX0WN1MmP-FW_SLX4ill0/rs:fit/g:sm/q:90/h:594/w:590/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNDE3/NzQtMTI5NTMwNDYw/OS5qcGVn.jpeg" },
  { name: "Vampire Weekend", artist: "Vampire Weekend", year: 2008, cover: "https://i.discogs.com/dxjPPtiv5WRZqiAaIucAEcCIJFqKEmwftlHEcZgysKU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwODcy/MDQwLTE1OTc2NjEw/NjctODAyMi5qcGVn.jpeg" },
  { name: "Fleet Foxes", artist: "Fleet Foxes", year: 2008, cover: "https://i.discogs.com/RKhfiLLqjrylqyHfkGDMmaK4rT_Ba5M_eHrYYM5BBro/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNTk5/MjctMTYyODYwNjgw/MS0xMzIwLmpwZWc.jpeg" },
  { name: "808s & Heartbreak", artist: "Kanye West", year: 2008, cover: "https://i.discogs.com/32OvVPiCo2V1Zj27YcPTrhdo8FZ3DrLsVUmi7r96-JQ/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MTcw/NDktMTUyOTc1NDUy/NC04NzEwLmpwZWc.jpeg" },
  { name: "Dear Science", artist: "TV on the Radio", year: 2008, cover: "https://i.discogs.com/BL_H-khCLnRECC9iDcCAeXD3UpT4Y9yCqm75cTSSC4g/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NzE5/ODYtMTIyNjc0MDAx/My5qcGVn.jpeg" },
  { name: "For Emma, Forever Ago", artist: "Bon Iver", year: 2008, cover: "https://i.discogs.com/AnzJpMb8iDZUh9E-iZWv3oTaPM9lBtzCdfSlTop1sI0/rs:fit/g:sm/q:90/h:480/w:480/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MTkw/NzItMTIzMjU1MzA0/Ny5qcGVn.jpeg" },
  { name: "Merriweather Post Pavilion", artist: "Animal Collective", year: 2009, cover: "https://i.discogs.com/7PO58jL3ee8ev8st01DxesiJ41FeFkDXyZyR0R3ghdE/rs:fit/g:sm/q:90/h:450/w:450/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1OTIx/MTgtMTIzMDc5OTk5/Ny5qcGVn.jpeg" },
  { name: "Wolfgang Amadeus Phoenix", artist: "Phoenix", year: 2009, cover: "https://i.discogs.com/D6pGKG6HBLaOPyO3RNlwpvT-qbQ1diN15K7C18VoB1E/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3ODc5/OTUtMTMyOTY0Nzcw/OC5qcGVn.jpeg" },
  { name: "xx", artist: "The xx", year: 2009, cover: "https://i.discogs.com/z_qurw0quHVGtJ11xJCce4u5iNvIkBlYDuVvtVygYiI/rs:fit/g:sm/q:90/h:589/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1NDY4/NzMtMTUxMjkyMDAz/Ni0xNzMyLmpwZWc.jpeg" },
  { name: "The Blueprint 3", artist: "Jay-Z", year: 2009, cover: "https://i.discogs.com/p4oE_jlT50PtCJuwP93ty7TuB1pqI0uqwAw7LlIccZg/rs:fit/g:sm/q:90/h:586/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTE3/NjAtMTQ5NjcxMDI2/OC02NzM2LmpwZWc.jpeg" },
  { name: "Humbug", artist: "Arctic Monkeys", year: 2009, cover: "https://i.discogs.com/Y0dubrWCAJsnPJfUINdSvQRupz8sIdRJz8cv-XFhL1I/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4OTU1/MDItMTM5OTE5NzM1/My05NDgyLmpwZWc.jpeg" },
  { name: "The Suburbs", artist: "Arcade Fire", year: 2010, cover: "https://i.discogs.com/wkYwUOYrK-kiGRJF3FGwgN9UCiAIhSdbSxtiSla6o0o/rs:fit/g:sm/q:90/h:589/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzODAw/MDQtMTU3OTQ3ODg0/Mi01NTAzLmpwZWc.jpeg" },
  { name: "Halcyon Digest", artist: "Deerhunter", year: 2010, cover: "https://i.discogs.com/UAoS_yjhAQO31u2XHuMLmv_YlYENRhcYxszT0O3xs6U/rs:fit/g:sm/q:90/h:539/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0Njky/MTMtMTQ1NDE1Mzc4/My01OTUyLnBuZw.jpeg" },
  { name: "This Is Happening", artist: "LCD Soundsystem", year: 2010, cover: "https://i.discogs.com/MImwNBega_KbL7FsTcMIGl7kkWDa8mPFWBkb_fwu-yw/rs:fit/g:sm/q:90/h:587/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ4NDg1/MDAtMTM3NzQ0MzA0/Ny00MzA5LmpwZWc.jpeg" },
  { name: "Body Talk", artist: "Robyn", year: 2010, cover: "https://i.discogs.com/7a4cdLPplaA8YJF2qFfXncRDalhv0qVyjhencqBAxvs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2NDY4/NDUtMTQ3NjY3NzYy/NS00NDkyLmpwZWc.jpeg" },
  { name: "Bon Iver", artist: "Bon Iver", year: 2011, cover: "https://i.discogs.com/6SUIFbK5-a4CuWQLFNQl4k1gdrafsy7Wtm_wYTRU1RY/rs:fit/g:sm/q:90/h:606/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5NDA4/NzYtMTc2NjI1MTYx/OC04NjI0LmpwZWc.jpeg" },
  { name: "House of Balloons", artist: "The Weeknd", year: 2011, cover: "https://i.discogs.com/oOTFttuPjyBm_jSR0goCFbgi6qqEdhYMxWep6gIUl6k/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3ODE3/NzAtMTYwOTcyNTYy/My04NTg1LmpwZWc.jpeg" },
  { name: "Watch the Throne", artist: "Jay-Z & Kanye West", year: 2011, cover: "https://i.discogs.com/qKgP_N2q_SReDBt2Jdzg3n-uxw2ri8nIFP-Rp_9Rxmc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwNDk5/MTgtMTQxNzAyMjEw/Ni0xODU2LmpwZWc.jpeg" },
  { name: "21", artist: "Adele", year: 2011, cover: "https://i.discogs.com/pbgKc7liXRhTdGM1zNhToDidUDYjK7_CQsxNaXxQTtE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2NjQ1/ODktMTQ1MjI2OTk5/NS03Mjk4LnBuZw.jpeg" },
  { name: "Take Care", artist: "Drake", year: 2011, cover: "https://i.discogs.com/AXsHLi1NYQL0XfJ9KW0fHGeteMJP6TSj6iqb3EhJuPI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2Mzcz/OTEtMTQ1ODM3OTA2/NS03NjkzLmpwZWc.jpeg" },
  { name: "Channel Orange", artist: "Frank Ocean", year: 2012, cover: "https://i.discogs.com/T194rRO-vNdN71vM_XUorDW2B3kNN5X4EwFDweUtDlc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3MzEx/ODUtMTc0NTQ0NzIy/Ni05NTIzLmpwZWc.jpeg" },
  { name: "Lonerism", artist: "Tame Impala", year: 2012, cover: "https://i.discogs.com/-n5T06zVgxNdVGl2u6jZEk9U73CYhaFRlztWjx3PXgE/rs:fit/g:sm/q:90/h:530/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM5MjQy/MzUtMTUzMjI3NTY3/Ny02Njc3LmpwZWc.jpeg" },
  { name: "An Awesome Wave", artist: "Alt-J", year: 2012, cover: "https://i.discogs.com/b3PyRl5klpdI2kSDcyYkOuaXHhPHxDYgHGvvTxcDWuE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2NTM1/OTEtMTQwMTM2OTk3/OC04MzIyLmpwZWc.jpeg" },
  { name: "Yeezus", artist: "Kanye West", year: 2013, cover: "https://i.discogs.com/1iwWQJiZH_87E7q0cuEcPFUjNN0-H0t-NKZORZtoufE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ2NjU5/NDUtMTU4NDkxODEx/MS0xMjMxLmpwZWc.jpeg" },
  { name: "Modern Vampires of the City", artist: "Vampire Weekend", year: 2013, cover: "https://i.discogs.com/i_9RTutrICkIn_xVx21yVvdH5Kdpu9HqWh9Bx4MU9Ic/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1NTc2/MTYtMTM2ODMwNTU1/OC02MDg5LmpwZWc.jpeg" },
  { name: "AM", artist: "Arctic Monkeys", year: 2013, cover: "https://i.discogs.com/-5VP_faWPuZm-_4156UfRx0a_Wh8c5YKFS-GYgmeN_Y/rs:fit/g:sm/q:90/h:566/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ4ODM1/MDUtMTYxNjkyNTU1/OC0xMTY2LmpwZWc.jpeg" },
  { name: "Acid Rap", artist: "Chance the Rapper", year: 2013, cover: "https://i.discogs.com/X1KHhYxddIyamNSKp3BCCF0YRXX6SGwDMX_-eJX2Wgs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1MjY2/MzQtMTc1MjMxNTg0/MS0zNDQ3LnBuZw.jpeg" },
  { name: "Benji", artist: "Sun Kil Moon", year: 2014, cover: "https://i.discogs.com/nB-0ukHw0xe1jgWRYQoU7htLLQUG4pGnF49V9uNsuwU/rs:fit/g:sm/q:90/h:519/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUzNjc1/MDMtMTQxMzA2MzMw/Mi00MDE5LmpwZWc.jpeg" },
  { name: "LP1", artist: "FKA twigs", year: 2014, cover: "https://i.discogs.com/05r7la-RnyLBomP3qkm6p0W1VMJ3atdgSbDmPRNFsGE/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU5Nzg1/MzgtMTQwODM4MzU4/MC03NzQ2LmpwZWc.jpeg" },
  { name: "Run the Jewels 2", artist: "Run the Jewels", year: 2014, cover: "https://i.discogs.com/h5cJ9G0mhDJl8EdeLXuWrM1wv8CmGyHf7hEKEaBAQ1M/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcxNTc5/MjMtMTY0NjA3NjEy/OC04NDQ3LmpwZWc.jpeg" },
  { name: "2014 Forest Hills Drive", artist: "J. Cole", year: 2014, cover: "https://i.discogs.com/W9yg8aKhaEqAVrb3QwdGDsN3SRIZ6Rsb7iC9SmsF2qA/rs:fit/g:sm/q:90/h:604/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY0MDE3/ODgtMTU1OTU4ODIx/Ni0yMjExLmpwZWc.jpeg" },
  { name: "Carrie & Lowell", artist: "Sufjan Stevens", year: 2015, cover: "https://i.discogs.com/DyTCyEM7sRXTthLJiuetK74spU7LJWsGhroZtfovc-I/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY1NDky/MTUtMTQyMTgxOTEw/Mi03NTY3LmpwZWc.jpeg" },
  { name: "In Colour", artist: "Jamie xx", year: 2015, cover: "https://i.discogs.com/JVdVvhN3bnxeaEG8eeiOHIfuG2oZqyvqGwPS--STy9E/rs:fit/g:sm/q:90/h:549/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcwNjc5/MDktMTYwMzIwODQy/NC02Mjc5LmpwZWc.jpeg" },
  { name: "Art Angels", artist: "Grimes", year: 2015, cover: "https://i.discogs.com/Lfj2Y3B-ZI6aOyap9bzMzVlON2zlUzDxR9Qk2G5qS_I/rs:fit/g:sm/q:90/h:551/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc4MDIz/NDUtMTQ1MDAyODEw/NS00MTc0LmpwZWc.jpeg" },
  { name: "Currents", artist: "Tame Impala", year: 2015, cover: "https://i.discogs.com/0m9adSJO-pWPRlWpwczRCUJfTokcREPbsmZMprEs1-o/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcyNTIx/MTEtMTY5NzM4MTkw/MS0yMjg3LmpwZWc.jpeg" },
  { name: "A Moon Shaped Pool", artist: "Radiohead", year: 2016, cover: "https://i.discogs.com/kYzFGno2KpcFhjC--iWvgJmPtr-91N705fxzwXU1YVQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg1ODE2/MzItMTQ2NjE3NjYy/NC01MDc3LmpwZWc.jpeg" },
  { name: "Lemonade", artist: "Beyonce", year: 2016, cover: "https://i.discogs.com/ZKlVmncrWPj7inH8QlfToVET7Y3ZNRNV6x979KhFEUM/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg0ODY3/MTQtMTQ3NzU3NTAx/MC02OTY5LmpwZWc.jpeg" },
  { name: "Blackstar", artist: "David Bowie", year: 2016, cover: "https://i.discogs.com/LswBvbR6ruVuRFRERK4hkbxGHrpfiRtvGepalpeuMQg/rs:fit/g:sm/q:90/h:605/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc5NDQw/ODMtMTYxNTI0NzU0/OS0zMTE0LmpwZWc.jpeg" },
  { name: "Atrocity Exhibition", artist: "Danny Brown", year: 2016, cover: "https://i.discogs.com/xq4iyA7wPct2c5KWH_jRVL6IoWo6LU7rH6izXqSQdMQ/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkyNDgx/MzYtMTYyMzI3MTQw/OS05Mzk5LmpwZWc.jpeg" },
  { name: "22, A Million", artist: "Bon Iver", year: 2016, cover: "https://i.discogs.com/sPfljxjT8wCkBn2x2N_KErZ9V1k0biBuhqwCbDvlNm8/rs:fit/g:sm/q:90/h:523/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkxMTc3/NjAtMTQ4MjE3ODU0/OS00Mzc1LmpwZWc.jpeg" },
  { name: "Flower Boy", artist: "Tyler the Creator", year: 2017, cover: "https://i.discogs.com/GR4uuBjiQsfYFl5n4oJMO_i8VpcaBE1nXqiqbDKJjSQ/rs:fit/g:sm/q:90/h:526/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNTg5/NTU0LTE1MDA0ODY2/MTMtMjU0Mi5qcGVn.jpeg" },
  { name: "Melodrama", artist: "Lorde", year: 2017, cover: "https://i.discogs.com/czL4saJHmT9NVfUrkGj59MrIgRJ9vA4B4syD_8PyYuc/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNDM2/NTc2LTE2MzU2OTc3/NjItNTg5Ny5qcGVn.jpeg" },
  { name: "SATURATION III", artist: "BROCKHAMPTON", year: 2017, cover: "https://i.discogs.com/qxqEr4K68ZBQEEIjwZ6WcVyptnhuD9WC3rUWfLckxFk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMjky/MDIwLTE1MTM1NTEw/ODAtNTEzMS5qcGVn.jpeg" },
  { name: "Ctrl", artist: "SZA", year: 2017, cover: "https://i.discogs.com/WKt5iB1L_BvqWW7kqFyGkIEPmaN0-_lqsm4bx6l557o/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNDE3/OTg3LTE0OTcwMjQx/MjAtMzI3Ny5qcGVn.jpeg" },
  { name: "Daytona", artist: "Pusha T", year: 2018, cover: "https://i.discogs.com/BNKKq7QfNH2K2iixgGHGWj87DvRlq-fpUEKHTeogfyg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMDQ3/NjgwLTE1ODc1MDA1/OTktNzQwNC5qcGVn.jpeg" },
  { name: "KOD", artist: "J. Cole", year: 2018, cover: "https://i.discogs.com/4NgQBGCQzClXYMCfCm2sKznrthnrDc-ev2v_uITmIR0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODkx/MTM4LTE1MzMyMzg1/MzktNTg1Mi5qcGVn.jpeg" },
  { name: "Be the Cowboy", artist: "Mitski", year: 2018, cover: "https://i.discogs.com/2pzHCzHqd5a-CzciW4yRfXPyPQy2cJ6fThCn_GL4kcw/rs:fit/g:sm/q:90/h:601/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMzM5/NTU3LTE1MzQ1OTcy/MDItOTc2MC5qcGVn.jpeg" },
  { name: "Room 25", artist: "Noname", year: 2018, cover: "https://i.discogs.com/aZ_srKzI0DqrLiVjtuyUXg_J8HzjGFdgHwab-TeNOrU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNTY3/MTc0LTE1Mzc3NDIy/OTItMjQ4NS5qcGVn.jpeg" },
  { name: "IGOR", artist: "Tyler the Creator", year: 2019, cover: "https://i.discogs.com/B_QfE2h5RekTykFDRtlCYdtf4025mCzkXJ_jLn1MGXk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4OTgw/MjcyLTE2NDc4MjA4/MzYtMTk1My5qcGVn.jpeg" },
  { name: "Norman Fucking Rockwell!", artist: "Lana Del Rey", year: 2019, cover: "https://i.discogs.com/rMQypLAU4Dxf3rs12I7aky-KLyqiNFUjBe49hEI9SCI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzNzY5/NjE0LTE3NDUyNjIw/NTMtOTc3Ni5qcGVn.jpeg" },
  { name: "When We All Fall Asleep, Where Do We Go?", artist: "Billie Eilish", year: 2019, cover: "https://i.discogs.com/M4pmdZ2Xt5Ar6H1tWWdTigOzAWegwSFwVFyUT3vQzMA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2NzI0/MTYwLTE2MDk0NTA0/NzAtNTUyNi5qcGVn.jpeg" },
  { name: "Grey Area", artist: "Little Simz", year: 2019, cover: "https://i.discogs.com/N2mPedOiujWW1lCrWhbWLhe1OBj6ASfBNCaMWzEJluY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMjc1/OTQxLTE2OTE0MTI5/MzktODg0NC5qcGVn.jpeg" },
  { name: "Titanic Rising", artist: "Weyes Blood", year: 2019, cover: "https://i.discogs.com/Q6ync_X4Unm4JBRanOtV80SMKgdMLn5VTv7f74__AvI/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNzQ4/NzUyLTE1NjAyODI2/MDktNTA3MC5qcGVn.jpeg" },
  { name: "Fetch the Bolt Cutters", artist: "Fiona Apple", year: 2020, cover: "https://i.discogs.com/9ESl7jlM_0dpFhB4CbzIxjG0yHf31eFFjw2mHPc4zl0/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NjYx/NjM0LTE1OTY2MjU4/ODUtNTY5Ny5qcGVn.jpeg" },
  { name: "Future Nostalgia", artist: "Dua Lipa", year: 2020, cover: "https://i.discogs.com/Q9wRgXsGgV7WGq1xsATU5GWnxT7saVE76ZhX-u0vdiA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0OTk4/NjMyLTE1ODUzMTMy/OTgtMjU4My5wbmc.jpeg" },
  { name: "Punisher", artist: "Phoebe Bridgers", year: 2020, cover: "https://i.discogs.com/5_HAZtDOf_nFKRYCXP1diy-zRBRyBwgGjKYqv_UMeVg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5OTI1/MjI3LTE2Mjk0Mzk4/NjAtMTc3NC5qcGVn.jpeg" },
  { name: "After Hours", artist: "The Weeknd", year: 2020, cover: "https://i.discogs.com/l2jj21S7ocLV1A11JcXOI4jnLaxXyOTyj9mJdwv4Pns/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0OTU4/NTAwLTE3NDU1NDY2/NzktNTgyNC5qcGVn.jpeg" },
  { name: "Folklore", artist: "Taylor Swift", year: 2020, cover: "https://i.discogs.com/FOOuTGspaW1gMBuxymHERoUKu4mDSLgWY-jGslkBnxI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1Njcw/OTMwLTE3MDIzNzY2/NTctNzMwOS5qcGVn.jpeg" },
  { name: "Sometimes I Might Be Introvert", artist: "Little Simz", year: 2021, cover: "https://i.discogs.com/6HwBif-XJNcgDnYu_pOMoYAL9pgvMW9b416L2eOHgDQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwMDY2/OTQ3LTE2MzA4NDAy/NjEtNzI2Mi5qcGVn.jpeg" },
  { name: "Jubilee", artist: "Japanese Breakfast", year: 2021, cover: "https://i.discogs.com/4Pxm5O8yYzVGpZ198rkC8eWMVzdwC5DSUcDUGkuU234/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4Njg4/Mzg3LTE2MjA3Njg2/MjMtNTQwNy5qcGVn.jpeg" },
  { name: "Call Me If You Get Lost", artist: "Tyler the Creator", year: 2021, cover: "https://i.discogs.com/c4XWiglS5vjOgflotKOHLdaL01ypptt1U0gCRJnsUmk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MjYy/OTUzLTE2NDc4MTgz/NTctNzg2MS5qcGVn.jpeg" },
  { name: "Sour", artist: "Olivia Rodrigo", year: 2021, cover: "https://i.discogs.com/ZsL3D18iyCbpILm0JeqfBLx0kQ0fnX34gZHfhpCJkUE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4ODI4/MzIyLTE3MDA4NjY0/MDQtMTU3OC5qcGVn.jpeg" },
  { name: "Mr. Morale & The Big Steppers", artist: "Kendrick Lamar", year: 2022, cover: "https://i.discogs.com/PrYdQZwjjfcA7Z9lBOCS0end7SBIO1-P3hGlGoc8Q04/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzMjA4/NjE0LTE2NTI0MjQw/NjgtOTUzNy5qcGVn.jpeg" },
  { name: "Renaissance", artist: "Beyonce", year: 2022, cover: "https://i.discogs.com/iij799cAkL5suwWawBhbU7DT4inYsCq7a16h0RXG3Fk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0MDMw/NDcwLTE2NTkwNjEz/ODctNTA1NS5qcGVn.jpeg" },
  { name: "Midnights", artist: "Taylor Swift", year: 2022, cover: "https://i.discogs.com/ki06ifcPltrcHvF6sQRdv11ArVKEWR8JOpCVFsiLcjc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0ODc4/NDg2LTE3MDI0NTk2/MTctNTk1OS5qcGVn.jpeg" },
  { name: "SOS", artist: "SZA", year: 2022, cover: "https://i.discogs.com/7hutaiit_yV70u-gZbn5qQw6lx7PzWVixKYuk8FI15U/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1NDA0/MjgzLTE2NzA1MDY1/MjctNTcwMS5wbmc.jpeg" },
  { name: "Did You Know That There's a Tunnel Under Ocean Blvd", artist: "Lana Del Rey", year: 2023, cover: "https://i.discogs.com/pDXktrh_WqejIggbZei3kw_KeL-Lq9JCAYH8ZHMh8f8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2NTIz/MTg1LTE2Nzk2MjY5/NzYtNzUwNS5qcGVn.jpeg" },
  { name: "The Record", artist: "boygenius", year: 2023, cover: "https://i.discogs.com/6ZzKw_-EXWRIA3knx-uwnF8mQPNnf4Fr8QR8TT-J1s8/rs:fit/g:sm/q:90/h:539/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2NjAz/NDU2LTE2OTU2NDI3/NTItMTkzNi5qcGVn.jpeg" },
  { name: "Guts", artist: "Olivia Rodrigo", year: 2023, cover: "https://i.discogs.com/f_5S8L5WsTkJYWuYBq0j331UMqY6z3uTAEdrS39CAMA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4MTk5/NDE5LTE3MDA5NDQz/MTYtMTk5My5qcGVn.jpeg" },
  { name: "Brat", artist: "Charli XCX", year: 2024, cover: "https://i.discogs.com/eMtZvOYWb1r4Be4bU4dNC6-BakERCVJKo6IEfbGqHoc/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwMzcz/Njg4LTE3MTc3ODYy/MTYtMzcxNy5qcGVn.jpeg" },
  { name: "GNX", artist: "Kendrick Lamar", year: 2024, cover: "https://i.discogs.com/kPhwE-PdPHGiPJMH9_CtAYilDBhS3K7WWGFADdqgXwo/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMyMzY4/MjM5LTE3MzIyOTUz/ODUtMzc2MS5qcGVn.jpeg" },
  { name: "Cowboy Carter", artist: "Beyonce", year: 2024, cover: "https://i.discogs.com/jrdNDzFUJNXYF8EMtY9lnyFOfst74N14IW5q9krg5Rc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwMjM2/Njg3LTE3MTMyODQy/NjItODA2NS5qcGVn.jpeg" },
  { name: "Hit Me Hard and Soft", artist: "Billie Eilish", year: 2024, cover: "https://i.discogs.com/e_mAGirynBqDWJSUVlFco-SlnRrMjGpKOy2OSW2zNaw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwNzcx/ODM0LTE3MTY1ODE5/NjYtMjg5Mi5qcGVn.jpeg" },
];

// State
let pool = [];
let timeline = [];
let currentAlbum = null;
let currentIndex = 0;
let score = 0;
let lives = 3;
const ROUND_SIZE = 11;
const MAX_LIVES = 3;

// DOM
const startScreen = document.getElementById("start-screen");
const endScreen = document.getElementById("end-screen");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const scoreEl = document.getElementById("score");
const currentAlbumEl = document.getElementById("current-album");
const currentAlbumSection = document.getElementById("current-album-section");
const timelineEl = document.getElementById("timeline");
const endTitle = document.getElementById("end-title");
const endMessage = document.getElementById("end-message");
const endScore = document.getElementById("end-score");
const livesDisplay = document.getElementById("lives-display");

// Events
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startGame() {
  startScreen.classList.remove("visible");
  endScreen.classList.remove("visible");

  pool = shuffle([...ALBUMS]).slice(0, ROUND_SIZE);
  timeline = [];
  currentIndex = 0;
  score = 0;
  lives = MAX_LIVES;
  scoreEl.textContent = score;
  renderLives();

  // Place the first album automatically
  timeline.push(pool[0]);
  currentIndex = 1;

  renderTimeline();
  presentNextAlbum();
}

function createAlbumCard(album, showYear) {
  const div = document.createElement("div");
  div.className = "album-card";

  const img = document.createElement("img");
  img.src = album.cover;
  img.alt = `${album.name} by ${album.artist}`;
  img.loading = "lazy";
  div.appendChild(img);

  const name = document.createElement("div");
  name.className = "album-name";
  name.textContent = album.name;
  div.appendChild(name);

  const artist = document.createElement("div");
  artist.className = "album-artist";
  artist.textContent = album.artist;
  div.appendChild(artist);

  if (showYear) {
    const year = document.createElement("div");
    year.className = "album-year";
    year.textContent = album.year;
    div.appendChild(year);
  }

  return div;
}

function presentNextAlbum() {
  if (currentIndex >= pool.length) {
    showEndScreen();
    return;
  }

  currentAlbum = pool[currentIndex];
  currentAlbumSection.style.display = "block";

  currentAlbumEl.innerHTML = "";
  const card = createAlbumCard(currentAlbum, false);
  card.classList.add("new-album");
  currentAlbumEl.appendChild(card.querySelector("img"));
  currentAlbumEl.appendChild(card.querySelector(".album-name"));
  currentAlbumEl.appendChild(card.querySelector(".album-artist"));

  // Make draggable
  currentAlbumEl.setAttribute("draggable", "true");
  currentAlbumEl.addEventListener("dragstart", handleDragStart);
  currentAlbumEl.addEventListener("dragend", handleDragEnd);

  // Touch support
  currentAlbumEl.addEventListener("touchstart", handleTouchStart, { passive: false });

  renderTimeline();
}

// --- Drag and Drop ---

function handleDragStart(e) {
  e.dataTransfer.setData("text/plain", "album");
  e.dataTransfer.effectAllowed = "move";
  currentAlbumEl.classList.add("dragging");
  document.body.classList.add("drag-active");
}

function handleDragEnd() {
  currentAlbumEl.classList.remove("dragging");
  document.body.classList.remove("drag-active");
  document.querySelectorAll(".insert-slot.drag-over").forEach(
    (s) => s.classList.remove("drag-over")
  );
}

function handleSlotDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  e.currentTarget.classList.add("drag-over");
}

function handleSlotDragLeave(e) {
  e.currentTarget.classList.remove("drag-over");
}

function handleSlotDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove("drag-over");
  document.body.classList.remove("drag-active");
  currentAlbumEl.classList.remove("dragging");
  const slotIndex = parseInt(e.currentTarget.dataset.index, 10);
  handlePlacement(slotIndex);
}

// --- Touch Drag ---

let touchClone = null;
let touchStarted = false;

function handleTouchStart(e) {
  if (!currentAlbum) return;
  e.preventDefault();
  touchStarted = true;

  const touch = e.touches[0];

  // Create visual clone
  touchClone = currentAlbumEl.cloneNode(true);
  touchClone.classList.add("touch-clone");
  touchClone.style.width = currentAlbumEl.offsetWidth + "px";
  touchClone.style.left = (touch.clientX - currentAlbumEl.offsetWidth / 2) + "px";
  touchClone.style.top = (touch.clientY - 30) + "px";
  document.body.appendChild(touchClone);

  currentAlbumEl.classList.add("dragging");
  document.body.classList.add("drag-active");

  document.addEventListener("touchmove", handleTouchMove, { passive: false });
  document.addEventListener("touchend", handleTouchEnd);
}

function handleTouchMove(e) {
  if (!touchClone) return;
  e.preventDefault();
  const touch = e.touches[0];
  touchClone.style.left = (touch.clientX - touchClone.offsetWidth / 2) + "px";
  touchClone.style.top = (touch.clientY - 30) + "px";

  // Hide clone so elementFromPoint can see the slot beneath
  touchClone.style.display = "none";
  document.querySelectorAll(".insert-slot").forEach((s) => s.classList.remove("drag-over"));
  const el = document.elementFromPoint(touch.clientX, touch.clientY);
  if (el && el.classList.contains("insert-slot")) {
    el.classList.add("drag-over");
  }
  touchClone.style.display = "";
}

function handleTouchEnd(e) {
  document.removeEventListener("touchmove", handleTouchMove);
  document.removeEventListener("touchend", handleTouchEnd);

  // Hide clone before hit-testing so elementFromPoint finds the slot
  if (touchClone) {
    touchClone.style.display = "none";
  }

  const touch = e.changedTouches[0];
  const el = touchStarted ? document.elementFromPoint(touch.clientX, touch.clientY) : null;

  if (touchClone) {
    touchClone.remove();
    touchClone = null;
  }

  currentAlbumEl.classList.remove("dragging");
  document.body.classList.remove("drag-active");
  document.querySelectorAll(".insert-slot.drag-over").forEach(
    (s) => s.classList.remove("drag-over")
  );

  if (!touchStarted) return;
  touchStarted = false;

  if (el && el.classList.contains("insert-slot")) {
    const slotIndex = parseInt(el.dataset.index, 10);
    handlePlacement(slotIndex);
  }
}

function renderTimeline() {
  timelineEl.innerHTML = "";

  // Sort timeline by year for display
  timeline.sort((a, b) => a.year - b.year);

  const showSlots = currentAlbum !== null;

  for (let i = 0; i <= timeline.length; i++) {
    if (showSlots) {
      const slot = document.createElement("div");
      slot.className = "insert-slot";
      slot.dataset.index = i;
      slot.addEventListener("click", () => handlePlacement(i));
      slot.addEventListener("dragover", handleSlotDragOver);
      slot.addEventListener("dragleave", handleSlotDragLeave);
      slot.addEventListener("drop", handleSlotDrop);
      timelineEl.appendChild(slot);
    }

    if (i < timeline.length) {
      const card = createAlbumCard(timeline[i], true);
      card.classList.add("timeline-album");
      timelineEl.appendChild(card);
    }
  }
}

function handlePlacement(slotIndex) {
  if (!currentAlbum) return;

  const yearBefore = slotIndex > 0 ? timeline[slotIndex - 1].year : -Infinity;
  const yearAfter = slotIndex < timeline.length ? timeline[slotIndex].year : Infinity;
  const albumYear = currentAlbum.year;

  const correct = albumYear >= yearBefore && albumYear <= yearAfter;

  if (correct) {
    timeline.push(currentAlbum);
    score++;
    scoreEl.textContent = score;
    currentIndex++;
    currentAlbum = null;

    renderTimeline();

    const cards = timelineEl.querySelectorAll(".timeline-album");
    timeline.sort((a, b) => a.year - b.year);
    const placedIdx = timeline.findIndex(
      (a) => a.name === pool[currentIndex - 1].name
    );
    if (cards[placedIdx]) {
      cards[placedIdx].classList.add("just-placed");
    }

    setTimeout(() => presentNextAlbum(), 500);
  } else {
    // Wrong — lose a life
    lives--;
    renderLives();
    timelineEl.classList.add("wrong-flash");
    setTimeout(() => timelineEl.classList.remove("wrong-flash"), 500);

    if (lives <= 0) {
      setTimeout(() => showEndScreen(), 700);
    } else {
      // Place the album in the correct spot and continue
      timeline.push(currentAlbum);
      currentIndex++;
      currentAlbum = null;
      renderTimeline();
      setTimeout(() => presentNextAlbum(), 700);
    }
  }
}

function showEndScreen() {
  currentAlbumSection.style.display = "none";
  const failedAlbum = currentAlbum;
  currentAlbum = null;
  renderTimeline();

  if (failedAlbum) {
    // Lost — out of lives
    endTitle.textContent = "Game Over";
    endMessage.textContent = `"${failedAlbum.name}" by ${failedAlbum.artist} was released in ${failedAlbum.year}.`;
    endScore.textContent = `Your score: ${score}`;
  } else {
    // Won
    if (lives === MAX_LIVES) {
      endTitle.textContent = "Celebrate good times, come on!";
      endMessage.textContent = "Perfect score! You nailed every single one.";
    } else {
      endTitle.textContent = "Nice work!";
      endMessage.textContent = "You made it through all 10 albums.";
    }
    endScore.textContent = `Your score: ${score}`;
  }
  endScreen.classList.add("visible");
}

function renderLives() {
  livesDisplay.innerHTML = "";
  for (let i = 0; i < MAX_LIVES; i++) {
    const dot = document.createElement("span");
    dot.className = "life-dot" + (i < lives ? " active" : " lost");
    livesDisplay.appendChild(dot);
  }
}
