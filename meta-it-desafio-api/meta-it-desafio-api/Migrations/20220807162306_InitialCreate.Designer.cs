﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using meta_it_desafio_api.Data;

#nullable disable

namespace meta_it_desafio_api.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20220807162306_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("meta_it_desafio_api.Model.Insight", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("DtCreate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime>("DtUpdate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int?>("TagId")
                        .HasColumnType("integer");

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("TagId");

                    b.ToTable("Insight");
                });

            modelBuilder.Entity("meta_it_desafio_api.Model.Tag", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Tag");
                });

            modelBuilder.Entity("meta_it_desafio_api.Model.Insight", b =>
                {
                    b.HasOne("meta_it_desafio_api.Model.Tag", "Tags")
                        .WithMany()
                        .HasForeignKey("TagId");

                    b.Navigation("Tags");
                });
#pragma warning restore 612, 618
        }
    }
}
